(function () {
"use strict";

angular.module('common')
.service('RegistrationService', RegistrationService);

RegistrationService.$inject = [];
function RegistrationService() {
  var service = this;

  service.getRegistrationData= function () {
    return service.registrationData;
  };

  service.setRegistrationData = function (registrationData) {
    service.registrationData = registrationData;
  };
}

})();
