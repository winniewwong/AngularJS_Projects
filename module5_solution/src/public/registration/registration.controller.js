(function () {
"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['registrationData', 'ApiPath'];
function RegistrationController(registrationData, ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
  $ctrl.registeredUser = false;

  if ( registrationData ){
    $ctrl.registrationData = registrationData;
    $ctrl.registeredUser = true;
  }
  console.log("RegistrationData: ", registrationData);
}

})();
