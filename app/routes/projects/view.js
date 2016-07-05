import Ember from 'ember';

export default Ember.Route.extend({
  dataService: Ember.inject.service(),
  model(params){
    return {
      params: params
    };
  },
  setupController(controller, models, params){
    controller.set('images', null);
    controller.set('project', null);
    controller.set('isLoading', true);
    this.get('dataService').getData().then((data)=>{
      controller.set('user', data);
    });
    this.get('dataService').fetchSingle('projects', models.params.id).then((data)=>{
      controller.set('images', data[0].images);
      controller.set('project', data[0]);
      controller.set('isLoading', false);
    });
  }
});
