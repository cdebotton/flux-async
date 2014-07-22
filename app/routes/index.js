/** @jsx React.DOM */

var Route         = require('react-nested-router').Route;
var IndexHandler  = require('./IndexHandler');
var AdminHandler  = require('./AdminHandler');
var App           = require('../components/App');

module.exports = function() {
  return (
    <Route handler={App}>
      <Route name="/" handler={IndexHandler} />
      <Route name="admin" handler={AdminHandler} />
    </Route>
  );
};
