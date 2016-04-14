import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  init: function() {
    this._super();
    Ember.run.schedule("afterRender", this, function() {
      this.send("showMap");
    });
  },

  actions: {
    showMap() {
      var container = this.$('.map-display')[0];
      var options = {
        center: {lat: 45.5231, lng: -122.6765},
        zoom: 12
      };
      this.get('map').findMap(container, options);
    }
  }
});
