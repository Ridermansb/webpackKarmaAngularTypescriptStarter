import '../../../app'

var $scope, $controller, $state;

beforeEach(angular.mock.module('ui.router'));
beforeEach(angular.mock.module('app'));

beforeEach(inject(function ($rootScope, _$state_, _$controller_) {
    $scope = $rootScope.$new();
    $state = _$state_.get('home');

    $controller = _$controller_('HomeController', {
        $scope: $scope,
        $state: $state
    });
}));

angular.mock.module(function($provide) {
    $provide.service('$scope', $scope);
});

it("should have a scope variable defined", function () {
    $scope.should.be.not.undefined;
});