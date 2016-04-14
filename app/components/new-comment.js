import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment() {
      var params = {
        author: this.get('author'),
        date: Date(),
        body: this.get('body'),
        event: this.get('event')
      };
      if((params.author === undefined) || (params.body === undefined)) {
        alert("Please fill out all the fields!");
      } else {
        this.sendAction('saveComment', params);
        this.set('author', '');
        this.set('body', '');
      }
    }
  }
});
