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
            <Link to="about">About</Link>
            <Link to="work">Work</Link>
          </nav>
        </header>
        {this.props.activeRoute}
        <footer>
          <h2>Contact Us</h2>
          <a href="mailto:1">Mail</a>
        </footer>
      </div>
    );
  }
});

module.exports = App;
