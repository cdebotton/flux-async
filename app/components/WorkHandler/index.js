/** @jsx React.DOM */

var React = require('react');
var Link = require('react-nested-router').Link;

module.exports = React.createClass({
  render: function() {
    return (
      <div className="work">
        <h2>Work</h2>
        <Link to="interactive">Interactive</Link>
        <Link to="video">Video</Link>
        <Link to="photography">Photography</Link>
        {this.props.activeRoute}
      </div>
    );
  }
});
