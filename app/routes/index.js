/** @jsx React.DOM */

var Route         = require('react-nested-router').Route;
var IndexHandler  = require('../components/IndexHandler');
var App           = require('../components/App');

module.exports = function() {
  return (
    <Route handler={App}>
      <Route name="/" handler={IndexHandler} />
    </Route>
  );
};
