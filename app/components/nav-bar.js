import Ember from 'ember';

export default Ember.Component.extend({
  isHome: true,
  isAbout: false,
  isContact: false,
  click(e){
    this.setProperties({isHome: false, isAbout: false, isContact: false})
    this.set(`${e.target.title}`, true)
  }
});
