describe('SignupController', function() {
  'use strict';

  var signupController;
  var menuItemByShortName  = {
     "id": 853,
      "short_name": "L4",
      "name": "Kung Pao Chicken",
      "description": "beef sauteed with carrots and celery, in a spicy Szechuan sauce",
      "price_small": null,
      "price_large": 9.75,
      "small_portion_name": null,
      "large_portion_name": null,
      "image_present": true

  };
  var testDataAllMenuItems = [
    {
      id: 1,
      short_name: "A1",
      name: "Egg Drop Soup",
      description: "chicken broth with egg drop",
      price_small: 2.25,
      price_large: 4.5,
      small_portion_name: "pint",
      large_portion_name: "quart",
      image_present: true
    },
    {
      id: 701,
      short_name: "C9",
      name: "Szechuan Chicken",
      description: "white meat chicken sauteed with carrots, celery, and bean sprouts in Szechuan sauce",
      price_small: 10.95,
      price_large: 14.95,
      small_portion_name: "pint",
      large_portion_name: "large",
      image_present: true
    }
  ];
  /**
   * Gets called before each unit test it()
   */
  beforeEach(function() {
    // Load module
    module('public');

    // Load any dependencies
    inject(function ($injector) {
      var $controller = $injector.get('$controller');
      var $log = $injector.get('$log');

      var MenuServiceErrorMock = {};

      MenuServiceErrorMock.getMenuItem = function () {
         var error = {
            status: "500",
            error: "Internal Server Error"
          };

          return error;
      };

      var RegistrationServiceErrorMock = {};


      // Instantiate controller
      signupController = $controller('SignupController', {
        $log: $log,
        allMenuItems: testDataAllMenuItems,
        MenuService: MenuServiceErrorMock,
        RegistrationService: RegistrationServiceErrorMock
      });
    });
  });

  it('should initialize with menu items', function() {
  //  expect(signupController).toBeDefined();
    expect(signupController.allMenuItems).toEqual(testDataAllMenuItems);
  });



});
