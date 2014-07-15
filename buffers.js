'use strict';

var READY = new Buffer(35);
READY.fill('server:ready');

module.exports = {
  READY: READY
};
