var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var handlebars = require('hbs');

var apiRouter = require('./app_api/routes/routes');
var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
const travelRouter = require('./app_server/routes/travel');

var app = express();

console.log('UPDATED APP.JS LOADED');

// Bring in database
require('./app_api/models/db');

// View engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
handlebars.registerPartials(
    path.join(__dirname, 'app_server', 'views', 'partials')
);
app.set('view engine', 'hbs');

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Display every request
app.use(function (req, res, next) {
    console.log('REQUEST RECEIVED:', req.method, req.originalUrl);
    next();
});

// Application routes
app.use('/api', apiRouter);
app.use('/users', usersRouter);
app.use('/travel', travelRouter);
app.use('/', indexRouter);

// Catch unmatched routes
app.use(function (req, res, next) {
    console.log('NO ROUTE MATCHED:', req.method, req.originalUrl);
    next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error =
        req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;