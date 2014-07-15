'use strict';

var gulp      = require('gulp');
var nodemon   = require('gulp-nodemon');
var lrserver  = require('tiny-lr')();
var refresh   = require('gulp-livereload');

module.exports = function () {
  nodemon({
    script: './index.js',
    ext: 'js html',
    env: { NODE_ENV: 'development' },
    ignore: ['public/**', 'Gulpfile.js', 'node_modules/**', 'bower_components/**', 'tasks/**/*.js'],
    nodeArgs: ['--debug']
  })
    .on('restart', function(changed) {
      console.log('Change observed, server restarted', changed);
    });
};
