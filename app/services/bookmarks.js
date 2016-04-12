import Ember from 'ember';

export default Ember.Service.extend({
  bookmarkList: [],

  add(event) {
    var list = this.get('bookmarkList');
    this.get('bookmarkList').pushObject(event);
  },
  remove(event) {
    this.get('bookmarksList').removeObject(event);
  },
});
