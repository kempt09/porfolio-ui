import Ember from 'ember';

export default Ember.Route.extend({
  dataService: Ember.inject.service(),
  model(){},
  setupController(controller, models){
    this.get('dataService').fetchAll('images').then((data)=>{
      controller.set('images', data.images);
    })
  }
});
