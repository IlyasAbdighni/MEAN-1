angular.module('myApp', ['ui.router', 'ui.bootstrap', 'ngResource', 'ngAnimate'])
	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouteProvider, $locationProvider) {

	$urlRouteProvider.otherwise('/');

	$locationProvider.html5Mode({enabled: true, requireBase: false});

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'partials/home.html',
			controller: 'homeCtrl'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'partials/about.html',
			controller: 'aboutCtrl'
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'partials/contact.html',
			controller: 'contactCtrl'
		})
		.state('contact.form', {
			url: '/form',
			templateUrl: 'partials/form/customerForm.html',
			controller: 'formCtrl'
		})

}])