import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveEvent(){
      var params = {
      name: this.get('name'),
      date: this.get('date'),
      address: this.get('address'),
      description: this.get('description'),
      image: this.get('image')
      };
      if((params.name === undefined) || (params.date === undefined) || (params.address === undefined) || (params.description === undefined) || (params.image === undefined)) {
        alert("Please fill out all the fields!");
      } else {
        this.sendAction('saveEvent', params);
      }
    }
  }
});
