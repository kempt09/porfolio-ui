import Ember from 'ember';

export default Ember.Route.extend({
  dataService: Ember.inject.service(),
  model(){},
  setupController(controller, models){
    this.get('dataService').getData().then((data)=>{
      console.log(data);
      controller.set('user', data);
    });
    controller.set("linkClass", "about-links");
  }
});
