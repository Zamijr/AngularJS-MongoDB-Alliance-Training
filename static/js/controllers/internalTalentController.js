app.controller('internalTalentController',function($scope,SkillsData,$http){

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

    $scope.skillsBoxModel = [];
    $scope.years = [];

    for(skill in SkillsData){
        var skillsBoxModel = {};
        skillsBoxModel.name = SkillsData[skill];
        skillsBoxModel.checked = false;
        skillsBoxModel.skillYears = 0;  
        $scope.skillsBoxModel.push(skillsBoxModel);
    }

    for(var x= 0; x<= 10; x++){
        var yearsModel = {};
        yearsModel.year = x;
        yearsModel.checked = false;
        $scope.years.push(yearsModel);
    }
  
    $scope.buscaBy = function () {
        var sk = $scope.skillsBoxModel;
        return function (resource) {
              for(x in sk){  
                if(sk[x].checked){
                     if(resource.personalSkill == sk[x].name && 
                     resource.skillExperience == sk[x].skillYears){
                            return true;
                     }
                }
             }
        }
  }

});