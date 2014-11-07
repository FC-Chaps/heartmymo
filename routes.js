var handlers = require('./handlers.js');

module.exports = [
	{
        method: 'GET',
        path: '/tweets',
        handler: handlers.getTwitterApi
    },
    {
        method: 'GET',
        path: '/tweets/liked',
        handler: handlers.getTweetsDatabase
    },
    {
    	method: "POST",
    	path: "/tweets/liked",
    	handler: handlers.postTweetDatabase
    }
];