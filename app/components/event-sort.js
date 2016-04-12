import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['date:asc'],
  sortedEvents: Ember.computed.sort('event', 'sortBy'),
});
