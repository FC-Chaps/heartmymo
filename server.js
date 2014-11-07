var Hapi = require('hapi');
var routes = require('./routes.js');


var server = new Hapi.Server('localhost', 8000, {cors: true});

server.pack.register({
	plugin: require("hapi-mongodb"),
	options: {
		url: process.env.MONGO_URI || require("./keys/mongouri.js"),
			settings: {
				db: {
					native_parser: false
				}
			}
		
	}
}, function (err) {

});

server.route(routes);

if(!module.parent){
	server.start(function(){
		console.log("Running...")
	});
}

module.exports = server;