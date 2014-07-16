module.exports = {
  statics: {
    willTransitionTo: function(transition) {
      if (! auth.loggedIn()) {
        Login.attemptedTransition = transition;
        transition.redirect('/login');
      }
    }
  }
};
