import Ember from 'ember';

export default Ember.Controller.extend({
  firebase: Ember.inject.service(),
  actions: {
    signUp() {
      let controller = this;
      this.get('firebase').createUser({
        email: this.get('email') || '',
        password: this.get('password') || '',
      }, (error, data) => {
        if (error) {
          alert(error);
          console.log(error);
        } else {
          controller.set('email', null);
          controller.set('password', null);
          alert('Successfully Signed-Up, Sign-In to start session!');
        }
      });
    },

    signIn(provider) {
      let controller = this;
      this.get('session').open('firebase', {
        provider: provider,
        email: this.get('signInEmail') || '',
        password: this.get('signInPassword') || '',
      }).then(() => {
        controller.set('signInEmail', null);
        controller.set('signInPassword', null);
        controller.transitionToRoute('home');
      }, (error) => {
        alert(error);
        console.log(error);
      });
    }
  }
});
