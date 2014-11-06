var twitterLogic = require('./twit.js');

module.exports = {
	getTweets: function (req, res) {
		res(twitterLogic.getTweets('movember', twitterLogic.validateTweets, 10));
	}
};
			
