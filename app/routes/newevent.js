import Ember from 'ember';

export default Ember.Route.extend({
actions: {
  saveEvent(params){
    var newEvent = this.store.createRecord('event', params);
    newEvent.save();
    this.transitionTo('all-events');
  }
}
});
