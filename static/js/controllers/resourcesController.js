app.controller('resourcesController', function($scope, Data,$location, $http) {

	    $scope.noUsersFound = false;

	    $scope.getResources  = function () {
			//alert('getResources');
			$http.get("/users")
				.then(function(response) {
					console.log(response);
					if(response.data.length == 0){
						$scope.noUsersFound = true;
					} else{
						$scope.noUsersFound = false;
					}
					$scope.resources = response.data;

				});
		}

    	$scope.getResources();





	//$scope.resources = [];

 
/*    Data.success(function(data) {
		  $scope.resources = data.employees;
	   });
  
	$scope.goToEdit = function(){
		$location.path("/edit");
	}*/
	
});