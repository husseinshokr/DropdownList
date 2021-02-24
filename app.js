var app = angular.module('myapp', []);
app.controller('usercontroller', function($scope, $http) {
    //for display country_name in the select country
    $scope.loadCountry = function(){
        $http.get("load_country.php")
             .success(function(data){
                 $scope.countries = data;
             })
    }
    //for display state_name in the select state
    $scope.loadState = function(){
        $http.post(
            "load_state.php",
            {'country_id':$scope.country}
        )
        .success(function(data){
            $scope.states = data;
        });
    }
});