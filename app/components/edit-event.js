import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editEvent(event) {
      var params = {
        name: this.get('name'),
        date: this.get('date'),
        address: this.get('address'),
        description: this.get('description'),
        image: this.get('image')
      };
      this.sendAction('editEvent', event, params);
      this.set('name', '');
      this.set('date', '');
      this.set('address', '');
      this.set('description', '');
      this.set('image', '');
    }
  }
});
