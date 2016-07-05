import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('/');
  this.route('index', {
    path: '/'
  });
  this.route('contact', {
    path: '/contact'
  });
  this.route('about', function(){
    this.route('index', {
      path: '/index'
    })
    this.route('view', {
      path: '/view'
    });
  });
  this.route('projects', function(){
    this.route('index', {
      path: '/index'
    })
    this.route('view', {
      path: '/view/:id'
    });
  });
});

export default Router;
