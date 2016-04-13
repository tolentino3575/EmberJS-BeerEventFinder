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
      this.sendAction('saveComment', params);
      this.set('author', '');
      this.set('body', '');
    }
  }
});
