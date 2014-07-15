/** @jsx React.DOM */

var React = require('react/addons');

var App = React.createClass({
  render: function() {
    return (
      <html lang="en-us">
      <head>
        <title>Brooklyn United</title>
        <link rel="stylesheet" href="/stylesheets/app.css" />
      </head>
      <body>
        <h1>Hello, World!</h1>
        <script src="/javascripts/bundle.js" />
      </body>
      </html>
    );
  }
});

module.exports = App;

if ('undefined' !== typeof window) {
  document.onload = function() {
    React.renderComponent(<App />, document.body);
  };
}
