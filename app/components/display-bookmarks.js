import Ember from 'ember';

export default Ember.Component.extend({
  bookmarks: Ember.inject.service(),
  actions: {
    removeFromBookmarks(event) {
      if(confirm("Remove this event from your bookmarks?")) {
        this.get('bookmarks').remove(event);
      }
    }
  }
});
