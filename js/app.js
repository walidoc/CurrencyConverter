'use strict';

angular.module('myApp', [])
  .controller('ConversionController', ['$scope','$http', function($scope, $http){ 

      $scope.rates= {};
      $http.jsonp("https://api.fixer.io/latest?base=ZAR&callback=JSON_CALLBACK")
      .success(function(response){ 
          $scope.rates = response.rates;
          $scope.toType= $scope.rates.AUD;
          $scope.fromType = $scope.rates.USD;
          $scope.fromValue =1;
          $scope.forExConvert();     
        });
        $scope.forExConvert = function(){
            $scope.toValue = $scope.fromValue * ($scope.toType * (1 / $scope.fromType));
        };   
  }]);
