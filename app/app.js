(function() {
    
    var app = angular.module('customersApp', ['ngRoute']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'CustomersController',
                templateUrl: 'app/views/customers.html'
            })
            .when('/orders/:customerId', {
                controller: 'OrdersController',
                templateUrl: 'app/views/orders.html'
            })
            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'app/views/login.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());