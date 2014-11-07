var twitterLogic = require('./twit.js');
var databaseLogic = require("./database.js");

module.exports = {
	getTwitterApi: function (req, res) {
		twitterLogic.getTweets('movember', twitterLogic.validateTweets, 10, res);
	},
	getTweetsDatabase: function (req, res) {
		var db = req.server.plugins["hapi-mongodb"].db;
		//Return 10 most liked from database on requests to GET /tweets/liked
		databaseLogic.read(10, db, function(data) {res(data)});
	},
	postTweetDatabase: function (req, res) {
		var db = req.server.plugins["hapi-mongodb"].db;
		console.log(databaseLogic.update(req.params.id, req.payload, db, res));
	}
};