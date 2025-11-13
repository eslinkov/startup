// =====Imports===== //
const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

// === Import database functions === //
const DB = require('./database.js');

const app = express();

// =====Middleware===== //
app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

// =====In-Memory "Database"===== //
// let users = [];
const authCookieName = 'token';
// let canvases = [];
// let nextCanvasId = 1;

// =====Service Port===== //
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// =====API router===== //
const apiRouter = express.Router();
app.use('/api', apiRouter); // tells app to pass api requests to the api router

// =====Service Endpoints===== //

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
      const newToken = uuid.v4(); // generate new token
      await DB.updateUserToken(user.username, newToken); // save new token to database
      setAuthCookie(res, newToken);
      res.send({ username: user.username });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

apiRouter.delete('/auth/logout', async (req, res) => {
  // const user = await findUser('token', req.cookies[authCookieName]);
  // if (user) {
  //   delete user.token;
  // }
  await DB.removeUserToken(req.cookies[authCookieName]);
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// ===== Authorization Middleware ===== //
const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};

// ===== Service Endpoints ===== //

apiRouter.get('/test', verifyAuth, (_req, res) => {
  res.send({ msg: 'Startup service' });
});

// ===== Canvas App Endpoints ===== //

// gets all canvases
apiRouter.get('/canvases', verifyAuth, (req, res) => {
  // filter by user
  res.send(canvases);
});

// create new blank canvas
apiRouter.post('/canvas', verifyAuth, (req, res) => {
  const newCanvas = {
    id: nextCanvasId++,
    name: 'Untitled Canvas',
    owner: 'tempUser',
    drawingData: []
  };
  canvases.push(newCanvas);
  res.send(newCanvas);
});

// update canvas name or save drawings
apiRouter.put('/canvas/:id', verifyAuth, (req, res) => {
  const id = parseInt(req.params.id);
  const { name, drawingData } = req.body;
  const canvas = canvases.find(c => c.id === id);

  if (canvas) {
    if (name) canvas.name = name;
    if (drawingData) canvas.drawingData = drawingData;
    res.send(canvas);
  } else {
    res.status(404).send({ msg: 'Canvas not found' });
  }
});

// delete a canvas
apiRouter.delete('/canvas/:id', verifyAuth, (req, res) => {
  const id = parseInt(req.params.id);
  const index = canvases.findIndex(c => c.id === id);
  if (index !== -1) {
    canvases.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).send({ msg: 'Canvas not found' });
  }
});

// generate the canvas link
apiRouter.get('/canvas/share/:id', verifyAuth, (req, res) => {
  const id = parseInt(req.params.id);

  res.send({
    shareUrl: `https://emmastartup.com/canvas/${id}?token=fake-share-token`
  });
});

// colormind API
apiRouter.post('/palette', async (req, res) => {
  try {
    const response = await fetch('http://colormind.io/api/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'default' })
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch palette' });
  }
});


// ===== Helper Functionc ===== //

async function createUser(username, password) {
  
  // const passwordHash = await bcrypt.hash(password, 10);

  // const user = {
  //   username: username,
  //   password: passwordHash,
  //   token: uuid.v4(),
  // };

  // users.push(user);
  // return user;
  return await DB.createUser(username, password);
}

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

async function findUser(field, value) {
    // if (!value) return null;
    // return users.find((u) => u[field] === value);
    if (!value) return null;
    if (field === 'username') {
      return await DB.getUser(value);
    } else if (field === 'token') {
        return await DB.getUserByToken(value);
    }
    return null;
}



//============================================//
// Return the application's default page for any unknown routes, fix stupid refresh bug
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});