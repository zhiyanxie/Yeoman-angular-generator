(function() {
      'use strict';

      angular
          .module('<%= componentName %>Module')
          .controller('<%= componentName %>Controller', <%= componentName %>Controller);

      <%= componentName %>Controller.$inject = ['$scope'];

      function <%= componentName %>Controller($scope) {
          var vm = this;

          activate();

          ////////////////

          function activate() {
          }
      }
})();
