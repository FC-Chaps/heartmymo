var twit = require('twit');
var feed = new twit(require("./keys.js"));

module.exports = (function () {
	return {
		getTweets:  function (search, validator, number){
			feed.get("search/tweets", { q: search }, function (err, tweets) {
				console.log(tweets);
				var tweetArray = [];
				var i;
				if (err) {
					throw err;
				}
				for ( i = 0; i < number; i ++){ 
					tweetArray.push(validator(tweet.statuses[i]));
				}
				return tweetArray;
			});
		},
		validateTweets: function (tweet){
			if(tweet.entities && tweet.entities.media && tweet.entities.media[0].type === "photo"){
				var validTweet = {
					id: tweet.id,
					username: tweet.user.screen_name,
					image: tweet.entities.media[0].media_url,
					date: new Date(tweet.created_at),
					body: tweet.text
				};
				return validTweet;
			};
		}
	}
}());




	

