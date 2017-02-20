(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  // retrieve an array of category information
  // https://winniewwong-angularjs.herokuapp.com/categories.json
  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  // retrieve all menu items when no category code is specified
  // https://winniewwong-angularjs.herokuapp.com/menu_items.json
  // retrieve all menu items when category code is specified
  // https://winniewwong-angularjs.herokuapp.com/menu_items.json?category=L
  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      console.log("menuservice: getMenuItems: ", response.data);
      return response.data;
    });
  };

  // retrieve menu item information by menu item short name.
  // https://winniewwong-angularjs.herokuapp.com/menu_items/A1.json
  service.getMenuItem = function(shortName) {
    return $http.get(ApiPath + '/menu_items/' + shortName + '.json')
    .then(function(response) {
      return response.data;
    });
  };

}



})();
