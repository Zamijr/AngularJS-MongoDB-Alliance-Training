app.controller('mainController', function($scope, Data,$location, $http) {

	$http.get("http://127.0.0.1:5984/workforce/_all_docs", {params:{ 'include_docs':true}})
		.then(function(response) {
			debugger;
		//	$scope.myWelcome = response.data;
		});
 
    Data.success(function(data) {   
		  $scope.employees = data.employees;
	   });
  
	$scope.goToEdit = function(){
		$location.path("/edit");
	}
	
});