(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['allMenuItems', 'MenuService', 'RegistrationService'];
function SignupController(allMenuItems, MenuService, RegistrationService) {
  var $ctrl = this;
  $ctrl.validateMenuNum = false;
  $ctrl.foundMenuNum = false;
  $ctrl.registrationSaved = false;
  $ctrl.allMenuItems = allMenuItems;
  console.log("SignupController:allMenuItems: ", $ctrl.allMenuItems);

  $ctrl.submit = function () {
    // subsequent signup will overwrite the previous registraion data
    $ctrl.registrationData = {};
    $ctrl.user.shortName = $ctrl.user.shortName.toUpperCase();

     var promise = MenuService.getMenuItem($ctrl.user.shortName);

      promise.then(function (response) {
        // menu short name is valid, save the registration information to the RegistrationService

        $ctrl.registrationSaved = true;
        $ctrl.foundMenuNum = true;

        $ctrl.registrationData = {
          firstName: $ctrl.user.firstName,
          lastName: $ctrl.user.lastName,
          email: $ctrl.user.email,
          phone: $ctrl.user.phone,
          shortName: $ctrl.user.shortName,
          favoriteMenuTitle: response.name,
          favoriteMenuDescription: response.description
        };

        console.log("submit:registrationSaved: ", $ctrl.registrationSaved);
        console.log("submit:foundMenuNum: ", $ctrl.foundMenuNum);
        console.log("submit:registrationData: ", $ctrl.registrationData);

        // Store registration data
        RegistrationService.setRegistrationData($ctrl.registrationData);
      })
      .catch(function (error) {
        // Can not find the menu short name    
        $ctrl.foundMenuNum = false;
        $ctrl.registrationSaved = false;
        console.log("submit:No such menu number exists.");
      });
    }

    $ctrl.onClearValidateMenuNum = function () {
      $ctrl.validateMenuNum = false;
      $ctrl.foundMenuNum = false;
      console.log("onClearValidateMenuNum:validateMenuNum: ", $ctrl.validateMenuNum);
      console.log("onClearValidateMenuNum:foundMenuNum: ", $ctrl.foundMenuNum);
    }

    $ctrl.onValidateMenuNum = function () {
      $ctrl.validateMenuNum = true;
      $ctrl.foundMenuNum = false;
      $ctrl.user.shortName = $ctrl.user.shortName.toUpperCase();
      for ( var i = 0; i < $ctrl.allMenuItems.menu_items.length; i++ ){
        if ( $ctrl.allMenuItems.menu_items[i].short_name == $ctrl.user.shortName) {
          $ctrl.foundMenuNum = true;
          break;
        }
      }

      console.log("onValidateMenuNum:validateMenuNum: ", $ctrl.validateMenuNum);
      console.log("onValidateMenuNum:foundMenuNum: ", $ctrl.foundMenuNum);
   }
}


})();
