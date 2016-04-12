import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(transition) {
    var password = "test";
    var userInputArea = "";
    var userInputtedPassword = prompt("Enter the password to access the Admin page:", userInputArea);

    if(password !== userInputtedPassword) {
      alert('Sorry, that is the wrong password.');
      transition.abort();
    }
  }
});
