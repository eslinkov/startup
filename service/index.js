// =====Imports===== //
const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

const app = express();

// =====Middleware===== //
app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

// =====In-Memory "Database"===== //
let users = [];
const authCookieName = 'token';

// =====Service Port===== //
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// =====API router===== //
const apiRouter = express.Router();
app.use('/api', apiRouter); // tells app to pass api requests to the api router

// =====Service Endpoints===== //
apiRouter.get('/test', (_req, res) => {
  res.send({ msg: 'Startup service' });
});

apiRouter.post('/auth/create', async (req, res) => {
  
  if (await findUser('username', req.body.username)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    
    const user = await createUser(req.body.username, req.body.password);

    
    setAuthCookie(res, user.token);

    
    res.send({
      username: user.username,
    });
  }
}); 

apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('username', req.body.username);
  if (user) {

    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ username: user.username });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// ===== Helper Functionc ===== //

async function createUser(username, password) {
  
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    username: username,
    password: passwordHash,
    token: uuid.v4(),
  };

  users.push(user);
  return user;
}

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

async function findUser(field, value) {
    if (!value) return null;
    return users.find((u) => u[field] === value);
}



//============================================//
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});