import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  date: DS.attr(),
  address: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  comments: DS.hasMany('comment', {async: true})
});
