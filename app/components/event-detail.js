import Ember from 'ember';

export default Ember.Component.extend({
  bookmarks: Ember.inject.service(),

  actions: {
    saveToBookmarks(event) {
      if(confirm('Bookmarked!')){
      this.get('bookmarks').add(event);
      }
    },
  }
});
