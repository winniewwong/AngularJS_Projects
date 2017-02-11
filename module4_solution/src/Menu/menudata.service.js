(function () {
'use strict';

angular.module('Data')
.constant('ApiPath', "https://davids-restaurant.herokuapp.com")
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http', 'ApiPath'];
function MenuDataService($http, ApiPath) {
  var service = this;

  service.getAllCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      console.log("categories = ", response.data);

      return response.data;
    });
  };

  service.getItemsForCategory = function (shortName) {
    var config = {};
      if (shortName) {
        config.params = {'category': shortName};
      }

      return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
        console.log("items = ", response.data);
        console.log("menu items = ", response.data.menu_items);
        return response.data;
      });
    };
}

})();
