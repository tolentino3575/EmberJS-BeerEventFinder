import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
<<<<<<< HEAD
  this.route('admin');
=======
  this.route('newevent');
>>>>>>> master
});

export default Router;
