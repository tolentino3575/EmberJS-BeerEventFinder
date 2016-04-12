import Ember from 'ember';

export default Ember.Service.extend({
  bookmarks: [],

  add(event) {
    this.get('bookmarks').pushObject(event);
  },
  remove(event) {
    this.get('bookmarks').removeObject(event);
  },
});
