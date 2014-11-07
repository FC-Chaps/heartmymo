angular.module('app', ['ui.bootstrap']);

angular.module('app')
	.controller('TabsDemoCtrl', function ($scope) {
		$scope.tabs = [
		    { 
		    	// latest tab
		    	title:'latest', 
		    	content: 
		    		{
		    			username: 'Freddy',
		    			image: 'http://placehold.it/400&text=latest-img'
		    		}
		    },


		    { 
		    	// top 10 tab
		    	title:'top 10', 
		    	content:'Coming soon' 
		    }
		];
	});

angular.module('app')
	.directive('imagePane', function(){
		return {
  			restrict: 'E',
  			templateUrl: 'image-pane.html'
		};
	});