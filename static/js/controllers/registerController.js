app.controller('registerController', function($scope, Data,SkillsData,$location, $http, $timeout) {


	$scope.registerSuccessMssg = false;
	$scope.registerErrorMssg = false;
	$scope.personalSkills = SkillsData;
	$scope.skillsExperience = [];
	for(var x = 0; x < 10; x++){
		$scope.skillsExperience.push((x+1));
	}
	$scope.gender = "Male";
	//,'Results-Oriented','Independent'
	$scope.register = function () {
		var data = {
			'firstname': $scope.firstname,
			'lastname': $scope.lastname,
			'email': $scope.email,
			'image': $scope.image,
			'gender':$scope.gender,
			'personalSkill': $scope.personalSkill,
			'skillExperience': $scope.skillExperience
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
				$scope.skillExperience = "";
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