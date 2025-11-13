
// ===== MongoClient object makes client connection to DB server ===== //
const { MongoClient } = require('mongodb');

// ===== import database credentials ===== //
const config = require('./dbConfig.json');

// grabs the username, password, hostname
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

// Client connection object
const client = new MongoClient(url);
 
// ===== database & collection objects ===== //
const db = client.db('rental');
const collection = db.collection('house');