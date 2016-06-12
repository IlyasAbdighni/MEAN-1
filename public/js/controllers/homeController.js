angular.module('myApp')
	.controller('homeCtrl', ['$scope', function($scope) {
		$scope.slides = [{
			image: 'img/mongodb.png'
		},
		{
			image: 'img/angular.png'
		},
		{
			image: 'img/nodejs.jpeg'
		}];
	}]);