/* jslint browser: true */
var angular = require('angular');
var angularRoute = require('angular-route');
var ProgressBar = require('progressbar.js');

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


    console.log('Switched to WelcomeController');
    var login = document.getElementById('loginbutton');
    var create = document.getElementById('createaccountbutton');

    login.addEventListener('click', function () {
        console.log('Login button clicked');
    });

    create.addEventListener('click', function () {
        console.log('Create button clicked');
    });


    $scope.test = 'welcome';

}]);

app.controller('NewUserController', ['$scope', '$http', 'BoltService', '$routeParams', function ($scope, $http, BoltService, $routeParams) {

    console.log('Switched to NewUserController');

    $scope.test = 'new';

}]);

app.controller('TodayController', ['$scope', '$http', 'BoltService', '$routeParams', function ($scope, $http, BoltService, $routeParams) {

    console.log('Switched to TodayController');

    var semiCircle = new ProgressBar.SemiCircle('#container', {
        color: '#FCB03C',
        strokeWidth: 3,
        trailWidth: 1,
//        text: {
//            value: '0'
//        }
    });
    
    var animate = document.getElementById('animate-btn');
    animate.addEventListener('click', function () {
        console.log('clicked animated');
        semiCircle.animate('.8', {
            duration: 1000,
        });
        semiCircle.setText(80);
    });

    
    
    
    $scope.test = 'today';

}]);

app.controller('HistoryController', ['$scope', '$http', 'BoltService', '$routeParams', function ($scope, $http, BoltService, $routeParams) {

    console.log('Switched to HistoryController');

    $scope.test = 'history';

}]);
