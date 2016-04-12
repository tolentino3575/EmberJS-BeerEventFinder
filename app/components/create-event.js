import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveEvent(){
      var params = {
      name: this.get('name'),
      date: this.get('date'),
      location: this.get('location'),
      description: this.get('description'),
      image: this.get('image')
      };
      this.sendAction('saveNewEvent', params);
    }
  }
});
