angular.module('myApp', ['ui.router'])
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

}])