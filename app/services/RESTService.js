'use strict';

var merge = require('react/lib/merge');
var Promise = require('es6-promise').Promise;
var Request = require('superagent');
var EventEmitter = require('events').EventEmitter;
var ASYNC = require('../constants/ASYNC');

var _entities = [];
var TIMEOUT = 10000;
var _pendingRequests = {};
var RESTService = function() {};

function digestData(callback) {
  return function(err, res) {
    if (err & err.timeout === TIMEOUT) { callback(ASYNC.TIMEOUT); }
    else if (!res.ok) { callback(ASYNC.ERROR); }
    else { callback(res.body); }
  };
}

function updateEntities(key, resolve, res) {
  _entities = res.body;
  resolve(_entities);
  delete _pendingRequests[key];
}

function startRequest(url) {
  var key = 'GET ' + url;
  abortPendingRequests(key);
  _pendingRequests[key] = new Promise(function(resolve, reject) {
    Request.get(url).end(updateEntities.bind(null, key, resolve));
  });
  return _pendingRequests[key];
}

function abortPendingRequests(key) {
  if (_pendingRequests[key]) {
    _pendingRequests[key]._callback = function() {};
    _pendingRequests[key].abort();
    _pendingRequests[key] = null;
  }
}

var CHANGE_EVENT = 'rest:change';

RESTService.prototype = merge(EventEmitter.prototype, {
  url: function() {return null},

  get: function(id) {
    var url = ('function' === typeof this.url) ? this.url(id) : this.url;
    if (id) url += '/' + id;
    var request = startRequest(url);
    return ASYNC.PENDING;
  },

  post: function(data) {
    var url = ('function' === typeof this.url) ? this.url() : this.url;
    return ASYNC.PENDING;
  },

  put: function(id, data) {
    var url = ('function' === typeof this.url) ? this.url(id) : this.url;
    url += '/' + id;
    return ASYNC.PENDING;
  },

  del: function(id) {
    var url = ('function' === typeof this.url) ? this.url(id) : this.url;
    url += '/' + id;
    return ASYNC.PENDING;
  }
});

module.exports = RESTService;
