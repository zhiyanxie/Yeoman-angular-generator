//controller test
describe('In <%= componentName%>Controller', function() {
    var scope, $location, createController;

    beforeEach(inject(function ($rootScope, $controller, _$location_) {
        $location = _$location_;
        scope = $rootScope.$new();

        createController = function() {
            return $controller('<%= componentName%>Controller', {
                '$scope': scope
            });
        };
    }));

    it('should...', function() {
        var controller = createController();
        expect(controller).toEqual(jasmine.any(Object));

    });
});
// Directive Test here

describe('In the <%= componentName%>Directive: ', function() {
  var element, scope;

  beforeEach(module('app'));

  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope.$new();

    element =
        '<<%= componentDashName %>></<%= componentDashName %>>';
        //'<component-test size="{{size}}"></component-test>';
    // scope.size = 100;
    element = $compile(element)(scope);
    scope.$digest();
  }));

  describe('The <%= componentName%>Directive', function() {
    it("should ...", function() {
      expect(element).toEqual(jasmine.any(Object));
    });



});
