(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/Menu/templates/home.template.html'
  })

  // Categories
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/Menu/templates/maincategories.template.html',
    controller: 'CategoriesController as categoriesCtrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

   // Items for a Category
  .state('items', {
    url: '/items/{category}',
    templateUrl: 'src/Menu/templates/mainitems.template.html',
    controller: "ItemsController as itemsCtrl",
    resolve: {
      items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
        console.log("$stateParams.category =", $stateParams.category);
        return MenuDataService.getItemsForCategory($stateParams.category);
      }]
    }
  });
}

})();
