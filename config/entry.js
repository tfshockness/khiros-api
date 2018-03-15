var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:1234Abcd@khiros-shard-00-00-hkxgz.mongodb.net:27017,khiros-shard-00-01-hkxgz.mongodb.net:27017,khiros-shard-00-02-hkxgz.mongodb.net:27017/test?ssl=true&replicaSet=khiros-shard-0&authSource=admin');

var home = require('../routes/home');
var users = require('../routes/users');
var post = require('../routes/post');
var carousels = require('../routes/carousel');
var occupation = require('../routes/occupation');
var professionals = require('../routes/professional');

var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', home);
app.use('/users', users);
app.use('/posts', post);
app.use('/carousels', carousels);
app.use('/occupations', occupation);
app.use('/occupations/:occupationId/professionals', professionals);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({error: 'Page Not Found'});
});

module.exports = app;
