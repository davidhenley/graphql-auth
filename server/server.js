const express = require('express');
const app = express();

// Mongoose
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Session/Passport
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');

// Webpack
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');

// GraphQL
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

// Keys
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

// Passport
app.use(passport.initialize());
app.use(passport.session());

app.get('/graphql', expressGraphQL({
  graphiql: true
}))

// Static Site
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
