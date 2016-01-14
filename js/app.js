var app = angular.module('MyApp', [
    'ngRoute',
    'MyApp.controllers',
    'MyApp.directives'
]);

app.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider
        .when('/one', {
            templateUrl: 'partials/one.html',
            controller: 'OneCtrl'
        })
        .when('/two', {
            templateUrl: 'partials/two.html',
            controller: 'TwoCtrl'
        })
        .when('/three', {
            templateUrl: 'partials/three.html',
            controller: 'ThreeCtrl'
        })
        .when('/four', {
            templateUrl: 'partials/four.html',
            controller: 'FourCtrl'
        })
        .when('/five', {
            templateUrl: 'partials/five.html',
            controller: 'FiveCtrl'
        })
        .otherwise({
            redirectTo: '/one'
        });
    }
]);