app.factory('Data', function($http) {

 // var obj = {content:null};

   return $http.get('/employees');
      
});

app.factory('SkillsData', function() {
   return ['Java','PHP','Javascript','HTML5','Css3','NodeJS','ReactJS'];
});

