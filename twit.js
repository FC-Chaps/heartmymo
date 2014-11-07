var twit = require('twit');
var feed = new twit(require("./keys.js"));
var stream = feed.stream('statuses/sample')

module.exports = (function () {
	return {
		getTweets:  function (search, validator, number, callback){
			feed.get("search/tweets", { q: search}, function (err, tweets) {
				var tweet = tweets.statuses;
				var tweetArray = [];
				var i;

				if (err) {
					throw err;
				}
				for (i = 0; tweetArray.length < number; i++){ 
					if(tweet[0] && tweet[i].entities && tweet[i].entities.media && tweet[i].entities.media[0].type === "photo"){
						tweetArray.push(validator(tweet[i]));
					};
				}
				callback(tweetArray);	
			});
		},
		validateTweets: function (tweet){
				var validTweet = {
					id: tweet.id,
					username: tweet.user.screen_name,
					image: tweet.entities.media[0].media_url,
					date: new Date(tweet.created_at),
					body: tweet.text
				};
				return validTweet;
		}
	}
}());




	

