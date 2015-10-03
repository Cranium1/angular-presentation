var DemoApp = angular.module('DemoApp', ['ngRoute']);

DemoApp.config(function($routeProvider, $locationProvider) {
	$routeProvider
    .when('/', {
        templateUrl : 'markdown.html',
        controller  : 'MarkdownController',
    })
	.when('/markdown', {
		templateUrl : 'markdown.html',
		controller  : 'MarkdownController'
	})
	.when('/ransom', {
		templateUrl : 'ransom.html',
		controller  : 'RansomController'
	});

	// $locationProvider.html5Mode(true);
});

DemoApp.controller('RansomController', function($scope) {
	$scope.$watch('input', function(val) {

		var ransomstring = "";
		for (var i = 0, len = val.length; i < len; i++) {
			if (val[i].match(/[a-z]/i)) {
				ransomstring = ransomstring.concat("<img src='/ransomimg/"+val[i]+".png'>");
			}
		}

		$scope.output = ransomstring;
	}, true);

	$scope.input = ""
	$scope.output = ""
});


DemoApp.controller('MarkdownController', function($scope) {
	$scope.$watch('input', function(val) {
		$scope.output = markdown.toHTML(val);
	}, true);

	$scope.input = ""
	$scope.output = ""
});

DemoApp.filter('html', function($sce) { return $sce.trustAsHtml; });