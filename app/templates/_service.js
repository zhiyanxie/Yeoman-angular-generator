(function() {
      'use strict';

      angular
          .module('<%= componentName %>Module')
          .factory('<%= componentName %>Service', <%= componentName %>Service);

      <%= componentName %>Service.$inject = [];
      function <%= componentName %>Service() {
          var service = {

          };
          return service;

      }
})();
