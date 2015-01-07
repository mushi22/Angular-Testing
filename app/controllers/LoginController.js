(function() {
    
    var LoginController = function ($scope) {
      $scope.firstName="",
      $scope.lastName=""
    };
    
    LoginController.$inject = ['$scope'];

    angular.module('customersApp')
      .controller('LoginController', LoginController);
    
}());

