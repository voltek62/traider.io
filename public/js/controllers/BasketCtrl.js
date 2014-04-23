


angular.module('BasketCtrl', []).controller('BasketController', function($scope, Products) { 
    Products.getAll(function(data){
        $scope.products = data;
    });	 
});