(function () {
'use strict';

angular.module('Data')
.component('items', {
  templateUrl: 'src/Menu/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
