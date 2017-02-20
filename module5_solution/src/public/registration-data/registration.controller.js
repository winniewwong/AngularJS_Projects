(function () {
"use strict";

angular.module('public')
.controller('RegistrationDataController', RegistrationDataController);

RegistrationDataController.$inject = ['registrationData'];
function RegistrationDataController(registrationData) {
  var $ctrl = this;
  $ctrl.registrationData = registrationData;
}

})();
