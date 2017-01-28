(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();
  console.log("to buy List: ", toBuyList);

  toBuyList.removeItem = function(itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtItems();
  console.log("bought List: ", boughtList);
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [
    {
      name: "Cookies",
      quantity: "10"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Bread",
      quantity: "2"
    },
    {
      name: "Apple Juice",
      quantity: "5"
    },
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "20"
    }
  ];

  // List of bought items
  var boughtItems = [];

  service.addToBuyItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };

    toBuyItems.push(item);
  };

  service.removeItem = function (itemIdex) {
     // Add the selected item to the boughtList
     boughtItems.push(toBuyItems[itemIdex]);

     // Remove the selected item from the toBuyList
     toBuyItems.splice(itemIdex, 1);

     console.log("to buy List: ", toBuyItems);
     console.log("bought List: ", boughtItems);
   };

  service.getToBuyItems = function () {
     return toBuyItems;
   };

   service.getBoughtItems = function () {
      return boughtItems;
   };
}
})();
