(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.signup', {
      url: '/signup',
      templateUrl: 'src/public/signup/signup.html',
      controller: 'SignupController',
      controllerAs: 'signupCtrl',
      // allMenuItems will be injected to SignupController
      resolve: {
        allMenuItems: ['MenuService', function (MenuService) {
          var data = MenuService.getMenuItems();
        
          console.log("routes::allMenuItems ", data);
          return data;
        }]
      }
    })
    .state('public.registration', {
      url: '/registration',
      templateUrl: 'src/public/registration/registration.html',
      controller: 'RegistrationController',
      controllerAs: 'registrationDataCtrl',
      // registrationData will be injected to RegistrationController
      resolve: {
        registrationData: ['RegistrationService', function (RegistrationService) {
          var data = RegistrationService.getRegistrationData();
          console.log("routes::registrationData: ", data);
          return data;
        }]
      }
    });
}
})();
