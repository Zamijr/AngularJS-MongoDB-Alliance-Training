app.directive('profile', function($http) {
    return {
        restrict: 'AE',
        scope: {
            data: '=resourceData',
            refresh:'&'
        },
        link: function(scope, element, attrs) {
             scope.expanded = false;
             scope.editMode = false;

            scope.detailProfile = function () {
                scope.editMode = true;
            }

            scope.detailProfileDone = function (id) {
                scope.editMode = false;
                //Only update NAME-- Add more fields..
                var data = {
                    'firstname': scope.data.firstname
                }

                $http.put('/users/' + id,data)
                    .success(function(data) {
                        alert('Update Done');
                        scope.refresh();
                    })
                    .error(function(data) {
                        alert('Update ERROR!');
                        console.log('Error: ' + data);
                    });
            }

            scope.deleteUser = function (id) {
                $http.delete('/users/' + id)
                    .success(function(data) {
                    //    $scope.todos = data;
                        alert('Delete Done');
                        scope.refresh();

                        console.log(data);
                    })
                    .error(function(data) {
                        alert('Delete ERROR!');
                        console.log('Error: ' + data);
                    });
            }
        },
        templateUrl: 'templates/profile.html'

    };
});
