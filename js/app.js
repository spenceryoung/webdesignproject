var app = angular.module('MyApp', [
    'ngRoute',
    'MyApp.controllers',
    'MyApp.directives'
]);

app.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider
        .when('/home', {
            templateUrl: 'partials/one.html',
            controller: 'OneCtrl'
        })
        .when('/angularjs', {
            templateUrl: 'partials/two.html',
            controller: 'TwoCtrl'
        })
        .when('/fancybox', {
            templateUrl: 'partials/three.html',
            controller: 'ThreeCtrl'
        })
        .when('/css3', {
            templateUrl: 'partials/four.html',
            controller: 'FourCtrl'
        })
        .when('/flexbox', {
            templateUrl: 'partials/five.html',
            controller: 'FiveCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
    }
]);