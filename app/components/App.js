/** @jsx React.DOM */

var React = require('react');
var Link = require('react-nested-router').Link;

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <header>
          <h1>Hello, World!</h1>
          <nav>
            <Link to="/">Home</Link>
          </nav>
        </header>
        {this.props.activeRoute}
      </div>
    );
  }
});

module.exports = App;
