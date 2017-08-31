const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const keys = require('./config/keys');

mongoose.connect(keys.MONGO_URI);

mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance'))
  .on('error', (e) => console.log('Error connecting to MongoLab', e));

app.get('/', (req, res) => {
  res.send('Hi there');
});

module.exports = app;
