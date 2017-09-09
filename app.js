(function(){

  'use strict'; //browser does complain about bad coding mistakes

angular.module('myApp', [])

.controller('myController', function($scope){
  $scope.name = "";
  $scope.totalValue = 0;
  $scope.displayNumeric = function() {
    var totalNameValue = calculateNumericForString($scope.name); // get the total ascii value of the name
    $scope.totalValue = totalNameValue;
  };

  function calculateNumericForString(string) {
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }

    return totalStringValue;
  }





});

})();
