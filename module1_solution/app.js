(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.message = "";

  $scope.CheckIfTooMuch = function () {
    // looks for 0 or more spaces followed by a comma followed by 0
    // or more spaces and, when found, removes the spaces and
    // the comma from the string
    var re = /\s*,\s*/;
    var splits = $scope.dishes.split(re);
    var count = 0;
    console.log(splits);

    var i;
    for ( i = 0; i < splits.length; i++ ) {
      if ( splits[i] != "" ){
        count++;
      }
    }

    console.log(count);

    if ( $scope.dishes == "" || count == 0 ) {
        $scope.message = "Please enter data first";
    }
    else if ( count <= 3 ){
      $scope.message = "Enjoy!";
    }
    else if ( count > 3 ){
      $scope.message = "Too much!";
    }


  };
}

})();
