const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const Sentry = require('@sentry/node');

const logger = require('./lib/logger');

const app = express();

if (process.env.SENTRY_DSN) {
  Sentry.init({ dsn: process.env.SENTRY_DSN });
  app.use(Sentry.Handlers.requestHandler());
}

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/api/v1', require('./routes/v1/memberships'));
app.use('/api/v1', require('./routes/v1/proposals'));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});


if (process.env.SENTRY_DSN) {
  app.use(Sentry.Handlers.errorHandler());
}

// error handler
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  // TODO: error logging(sentry?)
  if (status >= 500) {
    console.error(err);
    logger.error(err);
  }
  res.status(status).json({
    error: err.message,
  });
});

module.exports = app;
