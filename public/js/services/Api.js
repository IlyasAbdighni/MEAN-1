angular.module('myApp')
	.factory('api', ['$resource',function ($resource) {
		
		return {
			customer: $resource('/api/customer/:id', {id: '@id'})
		}
	}]);