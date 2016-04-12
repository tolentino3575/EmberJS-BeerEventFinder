import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('event', {path: '/event/:event_id'});
  this.route('admin');
  this.route('newevent');
});

export default Router;
