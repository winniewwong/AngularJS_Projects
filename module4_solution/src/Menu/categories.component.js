(function () {
'use strict';

angular.module('Data')
.component('categories', {
  templateUrl: 'src/Menu/templates/categories.template.html',
  bindings: {
    categories: '<'
  }
});

})();
