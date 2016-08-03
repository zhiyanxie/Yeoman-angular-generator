(function() {
    'use strict';

    angular
        .module('<%= componentName %>Module')
        .directive('<%= componentName %>Directive', <%= componentName %>Directive);

    /* @ngInject */
    function <%= componentName %>Directive() {

        var directive = {
            bindToController: true,
            controller: "<%= componentName %>Controller",
            controllerAs: 'vm',
            link: link,
            restrict: 'AE',
            templateUrl: "<%= directiveUrl %>",
            scope: {
            }
        };
        return directive;

        function link(scope, element, attrs) {
        }
    } 

    <%= componentName %>Directive.$inject = [];


})();
