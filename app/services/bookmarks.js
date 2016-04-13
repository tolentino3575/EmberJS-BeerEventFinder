import Ember from 'ember';

export default Ember.Service.extend({
  bookmarkList: [],

  add(event) {
    this.get('bookmarkList').pushObject(event);
  },

  remove(event) {
    this.get('bookmarkList').removeObject(event);
  },

  includes(event){
    return this.get('bookmarkList').includes(event);
  }
});
