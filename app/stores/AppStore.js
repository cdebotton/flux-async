var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var merge = require('react/lib/merge');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

/** BEGIN: ASYNC DATA DEMO */

var keyMirror = require('react/lib/keyMirror');
var Promise = require('es6-promise').Promise;
var Request = require('superagent');

var TIMEOUT = 10000;
var _pendingRequests = {};
var RESTService = function() {};

function digestData(callback) {
  return function(err, res) {
    if (err & err.timeout === TIMEOUT) { callback(Async.TIMEOUT); }
    else if (!res.ok) { callback(Async.ERROR); }
    else { callback(res.body); }
  };
}

function updateEntities(key, resolve, res) {
  _users = res.body;
  resolve(_users);
  delete _pendingRequests[key];
  AppStore.emitChange();
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

var Async = keyMirror({
  PENDING: null,
  SUCCESS: null,
  ERROR: null,
  TIMEOUT: null
});

var isAny = function(obj, key) {
  return Object.keys(obj).indexOf(key) >= 0;
};

RESTService.prototype = merge(RESTService.prototype, {
  get: function(id, callback) {
    var url = ('function' === typeof this.url) ? this.url(id) : this.url;
    if (id) url += '/' + id;
    var request = startRequest(url);
    return Async.PENDING;
  },
  post: function(data) {},
  put: function(id, data) {},
  del: function(id) {}
});

var UserService = merge(RESTService.prototype, {
  url: function() {
    return '/api/v1/users';
  }
});

function getItemsAsync() {
  return UserService.get();
}

_users = getItemsAsync();

/** END: ASYNC DATA DEMO */

var AppStore = merge(EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getUsers: function() {
    return _users;
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action;
    switch (action.actionType) {
      case AppConstants.CREATE_USER:
        _createUser(action.data);
        break;
      case AppConstants.DELETE_USER:
        _deleteUser(action.id);
        break;
      case AppConstants.UPDATE_USER:
        _updateUser(action.id, action.data);
        break;
    }
  })
});

module.exports =  AppStore;
