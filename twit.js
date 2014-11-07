var twit = require('twit');
var feed = new twit(require("./keys.js"));
var stream = feed.stream('statuses/filter', { track: 'movember' })

module.exports = (function () {
	return {
		getTweets:  function (search, validator, number, res){
			var tweetArray = [];
			feed.get("search/tweets", { q: search, count: 10, filter: "images" }, function (err, tweets) {
				if (err) {
					throw err;
				} else {
					tweets.statuses.forEach(function (tweet) {
						tweetArray.push(validator(tweet));
						if(tweetArray.length === number) {
							res(tweetArray);
						}
					})
				}
			})
		},
		validateTweets: function (tweet){
				var validatedTweet = {
					id: tweet.id,
					username: tweet.user.screen_name,
					image: tweet.entities.media[0].media_url,
					date: new Date(tweet.created_at),
					body: tweet.text
				};
				return validatedTweet;
		}
	}
}());




	

