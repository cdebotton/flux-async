'use strict';

var gulp = require('gulp');

module.exports = function(ENV) {
  gulp.watch('./app/**/*.styl', ['stylus']);
  // gulp.watch('./app/**/*.js', ['browserify']);
};
