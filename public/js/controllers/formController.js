angular.module('myApp')
	.controller('formCtrl', ['$scope', 'api', function($scope, api){

		$scope.formData = {};
		$scope.customers = [];
		$scope.pageSize= 5;
		$scope.currentPage = 1;

		api.customer.query(function(data) {
			$scope.customers = data;
		}); 


		$scope.delete = function(index){
			bootbox.confirm('Are you sure to delete this customer?', function(answer){
				if(answer == true) {
					api.customer.delete({id: $scope.customers[index]._id}, function(data){
						$scope.customers.splice(index, 1);
					});
				}
			});
				
		};

		$scope.addToDatabase = function() {
			api.customer.save({}, $scope.formData, function(data){
				$scope.customers.push(data)
			},
			function(err){
				bootbox.alert('Error: ' + err);
			});
		}

	}])
	.filter('startFrom', function(){
		return function(data, start){
			return data.slice(start);
		}
	});