import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('event', params.event_id);
  },

  actions: {
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var event = params.event;

      event.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return event.save();
      });
      this.transitionTo('event', params.event);
    }
  }
});
