// ===== other imports ===== //
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

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

// ===== Database user functions ===== //

async function getUser(username) {
    let user = await userCollection.findOne({ username: username });
    return user;
}

async function createUser(username, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        username: username,
        password: passwordHash,
        token: uuid.v4(),
    };

    await userCollection.insertOne(user);
    return user;
}

// getUserByToken
async function getUserByToken(token) {
    let user = await userCollection.findOne({ token: token });
    return user;
}

// updateUserToken
async function updateUserToken(username, token) {
   
    await userCollection.updateOne({ username: username }, { $set: { token: token} });
}

// removeUserToken
async function removeUserToken(token) {

    await userCollection.updateOne({ token: token }, { $unset: { token: '' } });
}

// ===== database canvas functions ===== //

//  1. getCanvases() - get all canvases
async function getCanvases() {
    const canvases = await canvasCollection.find({}).toArray();
    return canvases;
}

//   2. createCanvas(canvas) - create a new canvas
async function createCanvas() {
    const lastCanvas = await canvasCollection.find().sort({ id: -1 }).limit(1).toArray();
    const nextId = lastCanvas.length > 0 ? lastCanvas[0].id + 1 : 1;

    const canvas = {
        id: nextId,
        name: 'Untitled Canvas',
        owner: 'tempUser',
        drawingData: []
    };

    await canvasCollection.insertOne(canvas);
    return canvas;
    


}


//   3. updateCanvas(id, updates) - update a canvas
async function updateCanvas(id, updates) {
    await canvasCollection.updateOne({ id: id }, { $set: updates });
    return await canvasCollection.findOne({ id: id });
}



//   4. deleteCanvas(id) - delete a canvas
async function deleteCanvas(id) {
    const result = await canvasCollection.deleteOne({ id: id });
    return result.deletedCount > 0;
}


// ===== Export functions so index.js can use ===== //
module.exports = {
    getUser,
    createUser,
    getUserByToken,
    updateUserToken,
    removeUserToken,
    getCanvases,
    createCanvas,
    updateCanvas,
    deleteCanvas
};