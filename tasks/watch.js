'use strict';

var gulp = require('gulp');
var watchify = require('watchify');
var lrserver = require('tiny-lr')();
var refresh = require('gulp-livereload');

function rebundle() {
  console.log('rebundle!');
  bundler.bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/javascripts/'))
    .pipe(refresh(lrserver));
}

module.exports = function() {
  gulp.watch('./app/**/*.styl', ['stylus']);
  gulp.watch('./app/**/*.js', ['browserify']);
  // var bundler = watchify('./app/index.js')
  //   .require(require.resolve('../app/index.js'), { entry: true })
  //   .transform('reactify')
  //   .on('update', rebundle);
};
