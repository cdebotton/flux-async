/** @jsx React.DOM */

var Routes         = require('react-router').Routes;
var Route         = require('react-router').Route;
var IndexHandler  = require('../components/IndexHandler');
var App           = require('../components/App');

module.exports = function() {
  return (
    <Routes>
      <Route handler={App}>
        <Route name="/" handler={IndexHandler} />
      </Route>
    </Routes>
  );
};
