'use strict';

/* @ngdoc object
 * @name swSite
 * @requires $urlRouterProvider
 *
 * @description
 *
 */
angular
  .module('swSite', [
    'ngAria',
    'ui.router',
    'ui.bootstrap',
    'home'
  ]);

angular
  .module('swSite')
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  });
