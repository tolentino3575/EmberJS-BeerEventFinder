import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  date: DS.attr(),
  location: DS.attr(),
  description: DS.attr(),
  image: DS.attr()
});
