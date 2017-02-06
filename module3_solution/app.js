(function(){
  'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      foundList: '<',
      onRemove: '&',
      click:'@click'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'menu',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController() {
  var menu = this;

  // If nothing is found as a result of the search OR
  // if the user leaves the textbox empty and clicks the "Narrow It Down For Me!" button,
  // you should simply display the message "Nothing found".
  // note that Initial page will not display "Nothing found"
  menu.nothingFound = function () {

  if ( menu.foundList.length == 0 && menu.click == "true"){
      return true;
    }
    else{
      return false;
    }
  };
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var menu = this;
  menu.itemName = "";
  menu.foundList = [];
  menu.click = false;

  menu.getCorrectItems = function () {
     menu.click = true;
     var promise = MenuSearchService.getMatchedMenuItems(menu.itemName);

      promise.then(function (response) {
        menu.foundList = response;
        console.log(menu.foundList);
      })
      .catch(function (error) {
        console.log("Something went terribly wrong.");
      });
  };

  menu.removeItem = function (itemIndex) {
    menu.foundList.splice(itemIndex, 1);
    console.log(menu.foundList.length);
  };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {

    // reset the found list
    var foundItems = [];

    // Asynchronous Ajax call to get the menu items from the restaurant server REST API
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    })
    .then(function (response) {
      // "then" function will return a promise

      // if the search term is not provide, return an empty found list
      if (searchTerm == ""){
        return foundItems;
      }

      // Search through the description to find the match
      // process result and only keep items that match
      for (var item in response.data.menu_items){
         if (response.data.menu_items[item].description.includes(searchTerm)){
           foundItems.push(response.data.menu_items[item])
         }
      }

      console.log(foundItems.length);
      return foundItems;
    });
  };
}

})();
