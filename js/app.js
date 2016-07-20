/* jslint browser: true */
var angular = require('angular');
var angularRoute = require('angular-route');


var app = angular.module('boltApp', ['ngRoute', 'BoltService']);

require('./service');

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/welcome', {
            controller: 'WelcomeController',
            templateUrl: 'sections/welcome.html'
        })
        .when('/new', {
            controller: 'NewUserController',
            templateUrl: 'sections/newuser.html'
        })
        .when('/today', {
            controller: 'TodayController',
            templateUrl: 'sections/today.html'
        })
        .when('/history', {
            controller: 'HistoryController',
            templateUrl: 'sections/history.html'
        })
        .otherwise({
            redirectTo: '/welcome',
        });
}]);


app.controller('WelcomeController', ['$scope', '$http', 'BoltService', '$routeParams', function ($scope, $http, BoltService, $routeParams) {
    
    $scope.test = 'welcome';
    
}]);

app.controller('NewUserController', ['$scope', '$http', 'BoltService', '$routeParams', function ($scope, $http, BoltService, $routeParams) {
    
    $scope.test = 'new';
    
}]);

app.controller('TodayController', ['$scope', '$http', 'BoltService', '$routeParams', function ($scope, $http, BoltService, $routeParams) {
    
    $scope.test = 'today';
    
}]);

app.controller('HistoryController', ['$scope', '$http', 'BoltService', '$routeParams', function ($scope, $http, BoltService, $routeParams) {
    
    $scope.test = 'history';
    
}]);