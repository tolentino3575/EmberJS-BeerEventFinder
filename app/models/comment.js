import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  date: DS.attr(),
  body: DS.attr(),
  event: DS.belongsTo('event', {async: true}),
});
