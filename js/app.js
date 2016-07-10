/* jslint browser: true */

var angular = require('angular');
var angularRoute = require('angular-route');


var app = angular.module('boltApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/welcome', {
            controller: 'Welcome',
            templateUrl: 'sections/welcome.html'
        })
        .when('/new-user', {
            controller: 'NewUser',
            template: 'sections/newuser.html'
        })
        .when('/today/:account', {
            controller: 'TodayView',
            templateUrl: 'sections/today.html'
        })
        .when('/history', {
            templateUrl: 'sections/history.html'
        });
}]);
