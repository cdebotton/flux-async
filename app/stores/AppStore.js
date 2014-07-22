var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var merge = require('react/lib/merge');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _todos = [];

function _destroyItem(index) {
  _todos.splice(index, 1);
}

function _createItem(item) {
  _todos.push(item);
}

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

  getTodos: function() {
    return _todos;
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action;
    switch (action.actionType) {
      case AppConstants.CREATE_ITEM:
        _createItem(action.item);
        break;
      case AppConstants.DESTROY_ITEM:
        _destroyItem(action.index);
        break;
    }
    AppStore.emitChange();
    return true;
  })
});

module.exports = AppStore;
