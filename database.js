var mongodb = require("hapi-mongodb");

module.exports = (function(){
	
	return {
		read: function (number, database, callback) {
			//return all from database, limit by number, sort by likes
			database
			.collection("tweetsliked")
			.find()
			.sort( {likes: 1} )
			.limit(number)
			.toArray(function (err, topTweets) {
				callback(topTweets);
			})

		},
		update: function (tweet, database, res) {
			//Find photo in database and update with numLikes, if not there, insert it
			var updateTweet = {
				username: tweet.username,
				image: tweet.image,
				id: tweet.id,
				likes: tweet.numLikes
			};
			database
			.collection("tweetsliked")
			.update( {id: tweet.id}, tweet, 
				{ 
					new: true, 
					upsert: true 
				}, 
				function (err, tweet) {
					if(err) {
						throw err;
					} else {
						res.redirect("/");
					}
				}
			);
		}
	}

}())