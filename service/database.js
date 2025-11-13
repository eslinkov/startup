
// ===== import MongoClient code ===== //
const { MongoClient } = require('mongodb');

// ===== import database credentials ===== //
const config = require('./dbConfig.json');

// grabs the username, password, hostname
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

// Client connection object
const client = new MongoClient(url);
 
// ===== database & collection objects ===== //
const db = client.db('startup');
const userCollection = db.collection('users');
const canvasCollection = db.collection('canvases');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

// ===== Database functions ===== //



// ===== Export functions so index.js can use ===== //
module.exports = {

};