app.controller('UserController', ['$scope','$resource',function($scope, $resource){
    var AddUser = $resource('/api/addUser');
     //$scope.array =[];
      $scope.addUser = function(){
        var addUser = new AddUser();
        addUser.firstName = $scope.firstName;
        addUser.lastName = $scope.lastName;
        addUser.email = $scope.email;
        addUser.password = $scope.password;
        addUser.phoneNumber = $scope.phoneNumber;
        addUser.role = $scope.role;
        addUser.$save(function(result){
          console.log(result.result);
        });
        
      // $scope.array.push({firstName : $scope.firstName, lastName : $scope.lastName, email : $scope.email, password: $scope.password, phoneNumber: $scope.phoneNumber,role: $scope.role});    
        $scope.firstName ="";
        $scope.lastName ="";
        $scope.email ="";
        $scope.password ="";
        $scope.phoneNumber ="";
        $scope.role ="";
      };  
   }]);
