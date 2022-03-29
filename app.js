const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes/app.route');

const app = express();
app.use(bodyParser.json());
app.use(morgan('combined'));
// Enable CORS for all methods
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use('/', routes);
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const { message } = error;
  console.log(error);
  res.status(status).json({ message, error: status });
});
module.exports = app;
