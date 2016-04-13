import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveEvent(){
      var params = {
      name: this.get('name'),
      date: this.get('date'),
      address: this.get('address'),
      description: this.get('description'),
      image: this.get('image'),
      author: this.get('author'),
    };
    this.sendAction('saveEvent', params);
    }
  }
});
