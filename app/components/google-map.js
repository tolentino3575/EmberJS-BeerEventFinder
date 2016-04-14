import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  init: function() {
    this._super();
    Ember.run.schedule("afterRender",this,function() {
      this.send("showMap");
    });
  },

  actions: {
    showMap() {
      var container = this.$('.map-display')[0];
      var options = {
        center: {lat: -34.397, lng: 150.644},
        zoom: 15
      };
      this.get('map').findMap(container, options);
    }
  }
});
