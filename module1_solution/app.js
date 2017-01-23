(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {

  $scope.CheckIfTooMuch = function () {
    // looks for 0 or more spaces followed by a comma followed by 0
    // or more spaces and, when found, removes the spaces and
    // the comma from the string
    var re = /\s*,\s*/;
    var splits = $scope.dishes.split(re);
    console.log(splits);
    $scope.count = 0;

    var i;
    for ( i = 0; i < splits.length; i++ ) {
      if ( splits[i] != "" ){
        $scope.count++;
      }
    }

    if ( $scope.dishes == "" || $scope.count == 0 ) {
        $scope.message = "Please enter data first";
    }
    else if ( $scope.count <= 3 ){
      $scope.message = "Enjoy!";
    }
    else if ( $scope.count > 3 ){
      $scope.message = "Too much!";
    }
  };
}

})();
