var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var merge = require('react/lib/merge');
var EventEmitter = require('events').EventEmitter;
var RESTService = require('../services/RESTService');
var _users;

var CHANGE_EVENT = 'change';

var UserService = merge(RESTService.prototype, {
  url: function() {
    return '/api/v1/users';
  }
});

_users = UserService.get();

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
