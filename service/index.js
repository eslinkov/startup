// =====Imports===== //
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// =====Middleware===== //
app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

// =====Engine===== //

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.get('/', (_req, res) => {
  res.send({ msg: 'Startup service' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});