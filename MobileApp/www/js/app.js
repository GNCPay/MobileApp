var sideMenuApp = angular.module('sideMenuApp', ['ionic', 'sideMenuApp.controllers', 'sideMenuApp.services']);

sideMenuApp.config(function ($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

sideMenuApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

        .state('home', {
            url: '/home',
            controller: 'HomeController',
            templateUrl: 'templates/home.html'
        })
        .state('about', {
            url: '/aboout-us',
            controller: 'AboutUsController',
            templateUrl: 'templates/about.html'
        })
        .state('three', {
            url: '/three',
            controller: 'ThreeController',
            templateUrl: 'templates/three.html'
        });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');
    }
])