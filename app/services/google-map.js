import Ember from 'ember';

export default Ember.Service.extend({
  googleMaps: window.google.maps,

  findMap(container, options) {
    return new this.googleMaps.Map(container, options);
  },

  center(latitude, longitude) {
    return new this.googleMaps.LatLng(latitude, longitude);
  },

  // placeMarker(map, eventLocation){
  //   var marker = new this.googleMaps.Marker({
  //     map: map,
  //     position: eventLocation,
  //     title: this.get(event.name)
  //   });
  //   return marker;
  // },

  // placeMarker(map, address, geocoder) {
  //   geocoder.geocode({'address': address}, function(results, status) {
  //     if(status === this.maps.GeocoderStatus.OK) {
  //       var marker = new this.maps.Marker({
  //         map: this.get('map'),
  //         position: results[0].geometry.location
  //       });
  //       return marker;
  //     } else {
  //       alert("Geocode was not successful for the following reason: " + status);
  //     }
  //   });
  // }

});
