'use strict';

/**
 * @ngdoc overview
 * @name angularmaterialApp
 * @description
 * # angularmaterialApp
 *
 * Main module of the application.
 */
angular
  .module('angularmaterialApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider, $mdThemingProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });

      $mdThemingProvider.theme('default')
            .primaryPalette('pink')
            .accentPalette('orange');
  });
