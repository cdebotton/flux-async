'use strict';

var gulp        = require('gulp');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');

exports.development = function() {
  browserify({ debug: true })
    .require(require.resolve('../app/index.js'), { entry: true })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/javascripts/'));
};
