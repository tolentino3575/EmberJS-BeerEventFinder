import moment from 'moment';
import Ember from 'ember';

export function formatDate(params) {
  var formatDate = moment(params[0].get('date')).format('MMMM Do YYYY');

  return formatDate;
}

export default Ember.Helper.helper(formatDate);
