import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editEvent(event, params) {
      this.sendAction("editEvent", event, params);
    }
  }
});
