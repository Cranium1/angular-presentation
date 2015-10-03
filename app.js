var BlogApp = angular.module('BlogApp', []);

BlogApp.controller('PreviewController', function($scope) {
	$scope.$watch('input', function(val) {
		$scope.output = markdown.toHTML(val);
	}, true);

	$scope.input = ""
	$scope.output = ""
});

BlogApp.filter('html', function($sce) { return $sce.trustAsHtml; });
