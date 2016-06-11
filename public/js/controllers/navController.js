angular.module('myApp')
	.controller('navCtrl', ['$scope', '$location', function($scope, $location) {
		$scope.isActive = function(destination){
			return destination == $location.path();
		}
	}]);