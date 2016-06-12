angular.module('myApp')
	.controller('formCtrl', ['$scope', 'api', function($scope, api){

		$scope.formData = {};

		$scope.addToDatabase = function() {
			console.log($scope.formData);
			api.customer.save({}, $scope.formData, function(){
				$scope.formData = {};
			});
		}

	}]);