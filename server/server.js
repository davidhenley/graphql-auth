const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');

const keys = require('./config/keys');

// Mongoose Connection
mongoose.connect(keys.MONGO_URI, {
  useMongoClient: true
});
mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance'))
  .on('error', (e) => console.log('Error connecting to MongoLab', e));

// Express Session
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: keys.SESSION_SECRET,
  store: new MongoStore({
    url: keys.MONGO_URI,
    autoReconnect: true
  })
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('Hi there');
});

module.exports = app;
