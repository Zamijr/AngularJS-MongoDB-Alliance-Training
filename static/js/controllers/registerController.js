app.controller('registerController', function($scope, Data,$location, $http, $timeout) {


	$scope.registerSuccessMssg = false;
	$scope.registerErrorMssg = false;
	$scope.personalSkills = [{id:1,skill:'Patient'},{id:2,skill:'Diplomatic'}];
	$scope.gender = "Male";
	//,'Results-Oriented','Independent'
	$scope.register = function () {
		var data = {
			'firstname': $scope.firstname,
			'lastname': $scope.lastname,
			'email': $scope.email,
			'image': $scope.image,
			'gender':$scope.gender,
			'personalSkill': $scope.personalSkill
			}
		var resetSuccess = function () {
			$scope.registerSuccessMssg = false;
		}
	    var resetError = function () {
			$scope.registerErrorMssg = false;
		}
		console.log(data);
		$http.post("/users", data)
			.success(function(data, status) {
				$scope.firstname = "";
					$scope.lastname = "";
					$scope.email = "";
					$scope.image = "";
					$scope.gender= "";
					$scope.personalSkill = "";
				$scope.registerSuccessMssg = true;

				$timeout(resetSuccess, 3000);
			})

			.error(function (error){
				$scope.registerErrorMssg = true;
				$timeout(resetError, 3000);
			});

	}


	//$scope.resources = [];

 
/*    Data.success(function(data) {
		  $scope.resources = data.employees;
	   });
  
	$scope.goToEdit = function(){
		$location.path("/edit");
	}*/
	
});