import Ember from 'ember';
const { $, run } = Ember;

export default Ember.Component.extend({
  classNames:['sticky-header-container'],
  classNameBindings: ['isSticky'],
  topPos: 0,
  isSticky: false,

  onWindowScroll(e) {
		let scroll = $(e.currentTarget).scrollTop();
    let topPos = 0;
    if (scroll > topPos) {
    	this.set('isSticky', true);
    } else {
    	this.set('isSticky', false);
    }
  },

  didInsertElement() {
    this._super(...arguments);
    this._windowScroll = run.bind(this, 'onWindowScroll');
    $(window).on('scroll', this._windowScroll);
    //this.set('topPos', this.$('.sticky-header').offset().top);
  },

  willRemoveElement() {
 		$(window).off('scroll', this._windowScroll);
  	this._super(...arguments);
  },
  actions: {
    signOut() {
      this.get('session').close();
      this.transitionToRoute('/');
    }
  }

});
