'use strict';

var express     = require('express');
var url         = require('url');
var open        = require('open');
var gulp        = require('gulp');
var app         = express();
var serveStatic = require('serve-static');
var bodyParser  = require('body-parser');
var cookieParser = require('cookie-parser');
var livereload  = require('connect-livereload');
var lrserver    = require('tiny-lr')();
var refresh     = require('gulp-livereload');
var lrport      = 35729;
var serverport  = 3000;
var env         = process.env.NODE_ENV === 'production' ?
                    'production' :
                    'development';

app.set('views', './app/views')
   .set('view engine', 'jade')
   .use(livereload({ port: lrport }))
   .use(serveStatic('./public'))
   .use(bodyParser.urlencoded({ extended: true }))
   .use(bodyParser.json())
   .use(cookieParser())
   .get('/api/v1/users', function(req, res) {
     res.send(['Optimus Prime', 'Megatron', 'Starscream'])
   })
   .use(function(req, res, next) {
     res.render('index');
   })
   .listen(serverport, function() {
     open('http://localhost:'+serverport);
   });
