var handlers = require('./handlers.js');

module.exports = [
	   {
        method: 'GET',
        path: '/tweets',
        handler: handlers.getTweets
    }

];