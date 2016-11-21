var app = angular.module('app',[]);

app.directive('tgThermometerVertical', ['$window', function($window) {
	
	return {
		restrict: 'E',
		scope: true,
		templateUrl: 'js/tg-thermometer-vertical.html',
		link: function(scope, elem, attrs) {

			scope.size = attrs.size;
			scope.height = attrs.height;
			scope.percent = attrs.percent;

			console.log(scope);
		}
	};

}]);