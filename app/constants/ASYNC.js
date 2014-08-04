'use strict';

var keyMirror = require('react/lib/keyMirror');

var ASYNC = keyMirror({
  PENDING: null,
  SUCCESS: null,
  ERROR: null,
  TIMEOUT: null
});

module.exports = ASYNC;
