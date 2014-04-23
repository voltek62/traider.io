
angular.module('ProductDetailsCtrl', []).controller('ProductDetailsController', function($scope, $routeParams, Products) {  
        var id = $routeParams.id; 
	Products.getOne(id, function(data){
            $scope.product=data;
        });  
});