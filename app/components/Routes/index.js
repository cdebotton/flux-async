/** @jsx React.DOM */

var Route = require('react-nested-router').Route;
var IndexHandler = require('../IndexHandler');
var AboutHandler = require('../AboutHandler');
var WorkHandler = require('../WorkHandler');
var InteractiveHandler = require('../InteractiveHandler');
var VideoHandler = require('../VideoHandler');
var PhotographyHandler = require('../PhotographyHandler');
var App = require('../App');

module.exports = function() {
  return (
    <Route handler={App}>
      <Route name="/" handler={IndexHandler} />
      <Route name="work" handler={WorkHandler}>
        <Route name="interactive" handler={InteractiveHandler} />
        <Route name="video" handler={VideoHandler} />
        <Route name="photography" handler={PhotographyHandler} />
      </Route>
      <Route name="about" handler={AboutHandler} />
    </Route>
  );
};
