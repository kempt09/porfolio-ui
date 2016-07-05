import Ember from 'ember';

export default Ember.Component.extend({
  date: null,

  init(){
    this._super(...arguments);
    let date = new Date();
    this.set('date', date.getFullYear())
  }

});
