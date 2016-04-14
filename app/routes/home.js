import Ember from 'ember';

export default Ember.Route.extend({
  var myLatLng = new google.maps.LatLng(45.5231, 122.6765);

  model() {
    return this.store.query('event', {
      limitToLast: 5
    });
  },

  // actions: {
  //
  // }
});
