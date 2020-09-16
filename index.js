// Enviroment variables
require('dotenv').config();

// needed to get the server to start
const express = require('express');
const app = express();

// connect to mongo here
const mongoose = require('mongoose');

const port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port,() => {
    console.log('Hey! The server started dude :)');
})