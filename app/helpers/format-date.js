import moment from 'moment';
import Ember from 'ember';

export function formatDate(params) {
  var formatMonth = '<div class="month">' + moment(params[0].get('date')).format('MMMM') + '</div>';
  var formatDay = '<div class="day">' + moment(params[0].get('date')).format('Do') + '</div>';
  var formatYear = '<div class="year">' + moment(params[0].get('date')).format('YYYY') + '</div>';

  return Ember.String.htmlSafe(formatMonth + formatDay + formatYear);
}

export default Ember.Helper.helper(formatDate);
