var Hapi = require('hapi');
var routes = require('./routes.js');


var server = new Hapi.Server('localhost', 8000);

server.route(routes);
server.start();