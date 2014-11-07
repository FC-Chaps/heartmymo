var url = 'http://localhost:8000/'

angular.module('app', ['ui.bootstrap']);

angular.module('app')
	.controller('TweetGetCtrl', ['$http', '$scope', function ($http, $scope) {
		
		var latestTweets;
		
		$http.get(url + 'tweets').success(function (data){
			tweets = data;
			$scope.latestTweets = tweets;

			console.log($scope.latestTweets);	

		});
		
		// $scope.like = function(){
		// 	if($scope.details.hasOwnProperty('likes')){
		// 		$scope.details[0].likes += 1;
		// 	}
		// 	else{
		// 		$scope.details[0].likes = 1;
		// 	}
		// 	$http.post(url + 'tweets/liked', $scope.details); 
		// };
	}]);

angular.module('app')
	.controller('LikedGetCtrl', ['$http', '$scope', function ($http, $scope) {
		
		var topTweets;
		
		$http.get(url + 'tweets/liked').success(function (data){
			tweets = data;
			$scope.topTweets = tweets;

			console.log($scope.topTweets);	

		});
		
		// $scope.like = function(){
		// 	if($scope.details.hasOwnProperty('likes')){
		// 		$scope.details[0].likes += 1;
		// 	}
		// 	else{
		// 		$scope.details[0].likes = 1;
		// 	}
		// 	$http.post(url + 'tweets/liked', $scope.details); 
		// };
	}]);

angular.module('app')
	.controller('TabsDemoCtrl', function ($scope) {

		$scope.active = {
			latest: true,
			top10: false
		};

		// $scope.active.latest = "true";
		// $scope.active.top10 = "false";
		$scope.toggleActive = function() {
			if($scope.active.latest === "true") {
				$scope.active.latest = "false";
				$scope.active.top10 = "true";
			} 
			else if ($scope.active.top10 === "true"){
				$scope.active.latest = "true";
				$scope.active.top10 = "false";
			}
		}


		$scope.tabs = [
		    { 
		    	// latest tab
		    	title:'latest',
		    	content: 'Will'
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

angular.module('app')
.directive('imageTop', function(){
	return {
			restrict: 'E',
			templateUrl: 'image-top.html'
	};
});