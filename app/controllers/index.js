import Ember from 'ember';

export default Ember.Controller.extend({
  firebase: Ember.inject.service(),
  actions: {
    signUp() {
      let controller = this;
      this.get('firebase').createUser({
        username: this.get('username') || '',
        password: this.get('password') || '',
      }, (error, data) => {
        if (error) {
          console.log(error);
        } else {
          controller.set('username', null);
          controller.set('password', null);
          alert('Successfully Signed-Up, Sign-In to start session!');
        };
      });
    },

    signIn(provider) {
      let controller = this;
      this.get('session').open('firebase', {
        provider: provider,
        username: this.get('signInUsername') || '',
        password: this.get('signInPassword') || '',
      }).then(() => {
        controller.set('signInUsername', null);
        controller.set('signInPassword', null);
        controller.transitionToRoute('home');
      }, (error) => {
        console.log(error);
      });
    }
  }
});
