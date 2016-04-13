import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  date: DS.attr(),
  address: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  comments: DS.hasMany('comment', {async: true}),
  // author: DS.belongsTo('session.currentUser.email', {async: true}),

  bookmarks: Ember.inject.service(),
  inBookmarks: Ember.computed('bookmarks.bookmarkList.[]', function(){
    return this.get('bookmarks').includes(this);
  })
});
