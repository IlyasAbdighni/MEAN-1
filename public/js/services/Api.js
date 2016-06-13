angular.module('myApp')
	.factory('api', ['$resource',function ($resource) {
		
		return {
			customer: $resource('/api/customers/:id', {id: '@id'})
		}
	}]);