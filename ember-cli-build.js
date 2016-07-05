/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    minifyJS: {
      enabled: EmberApp.env() === 'production',
      options: {
        exclude: ['js/bootstrap.min.js']
      }
    },
    minifyCSS: {
      enabled: EmberApp.env() === 'production',
      options: {
        exclude: ['css/bootstrap.min.css']
      }
    },
    fingerprint: {
      enabled: false
    },
    storeConfigInMeta: false
  });

  return app.toTree();
};
