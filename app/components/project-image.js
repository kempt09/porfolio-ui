import Ember from 'ember';

export default Ember.Component.extend({
  isHovering: false,
  mouseEnter(e){
    this.set('isHovering', true);
    this.set('placeholder', e.target.title);
  },
  mouseLeave(e){
    this.set('placeholder', null);
    this.set('isHovering', false);
  }
});
