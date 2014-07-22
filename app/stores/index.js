function Store(name) {
  this.name = name;
  this.__listeners = {};
}

Store.prototype.__attachListener = function(evt) {
  this.__listeners[evt] || this.__listeners[evt] = [];
};

var Mixin = {
  /**
   * var UserStore = require('../stores/User');
   *
   * -------/
   *
   * registerStores: function() {
   *   return [{user: UserStore}]
   * }
   *
   * -------/
   *
   */
  registerStores: function() {
    return [];
  },

  componentDidMount: function() {
    var stores = this.registerStores().map(function(store) {
      var instance = new Store(store);
    }.bind(this));
  }
};

module.exports = {
  Mixin: Mixin,
  Factory: Store
};
