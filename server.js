var Hapi = require('hapi');
var routes = require('./routes.js');


var server = new Hapi.Server('localhost', 8000);

server.route(routes);

if(!module.parent){
	server.start();
}

module.exports = server;