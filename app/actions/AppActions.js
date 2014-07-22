var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatchers/AppDispatcher');

var AppActions = {
  createItem: function(item) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.CREATE_ITEM,
      item: item
    });
  },

  destroyItem: function(index) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.DESTROY_ITEM,
      index; index
    });
  }
};

module.exports = AppActions;
