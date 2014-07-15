'use strict';

var gulp          = require('gulp');
var nodemon       = require('gulp-nodemon');
var lrserver      = require('tiny-lr')();
var compileJS     = require('./browserify');
var refresh       = require('gulp-livereload');
var Buffers       = require('../buffers');

module.exports = function () {
  nodemon({
    script: './index.js',
    ext: 'js html',
    env: { NODE_ENV: 'development' },
    stdout: false,
    stderr: false,
    ignore: ['public/**', 'Gulpfile.js', 'node_modules/**', 'bower_components/**', 'tasks/**/*.js'],
    nodeArgs: ['--debug']
  })
    .on('change', function(changed) {
      compileJS.development();
    })
    .on('readable', function() {
      this.stdout.on('data', function(data) {
        if (data === Buffers.READY) {
          console.log('SERVER IS READY~~~~~');
          gulp.src('./app/index.js')
            .pipe(refresh(lrserver));
        }
      });
    })
    .on('start', function(changed) {
      console.log('Change observed, server restarted', changed);
    });
};
