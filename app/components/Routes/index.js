/** @jsx React.DOM */

var Route = require('react-nested-router').Route;
var IndexHandler = require('../IndexHandler');
var AdminHandler = require('../AdminHandler');
var App = require('../App');

module.exports = function() {
  return (
    <Route handler={App}>
      <Route name="/" handler={IndexHandler} />
<<<<<<< HEAD
      <Route name="admin" handler={AdminHandler} />
=======
      <Route name="work" handler={WorkHandler}>
        <Route name="interactive" handler={InteractiveHandler} />
        <Route name="video" handler={VideoHandler} />
        <Route name="photography" handler={PhotographyHandler} />
      </Route>
      <Route name="admin" handler={AdminHandler} />
      <Route name="about" handler={AboutHandler} />
>>>>>>> 85ec0693594c416dda08916f62a09914ae3a5439
    </Route>
  );
};
