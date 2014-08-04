/** @jsx React.DOM */

var React = require('react');
var AppStore = require('../stores/AppStore');

function getUsers() {
  return {users: AppStore.getUsers()};
}

module.exports = React.createClass({
  getInitialState: function() {
    return getUsers();
  },

  componentDidMount: function() {
    AppStore.addChangeListener(this.handleChange);
  },

  componentWillUnmount: function() {
    AppStore.removeChangeListener(this.handleChange);
  },

  handleChange: function() {
    this.setState(getUsers());
  },

  render: function() {
    var users = this.state.users !== 'PENDING' ? this.state.users.map(function(user, key) {
      return <li key={key}>{user}</li>;
    }) : <li>Loading</li>;
    return (
      <div className="home">
        <h2>Home</h2>
        <p>Users:</p>
        <ul>{users}</ul>
      </div>
    );
  }
});
