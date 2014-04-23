var express = require('express');
var routes = require('./routes/routes.js');
 
 
createServer = function createServer () {
    
    var server = express();
    // specify middleware
    //server.use(express.cookieParser());
    
    //server.use(express.bodyParser());
    server.use('/css', express.static(__dirname + '/media/css'));
    server.use('/img', express.static(__dirname + '/media/img')); 
    server.use('/js', express.static(__dirname + '/media/js'));
     
    // attach router handlers
    routes.attachHandlers(server); //, passport);
    
    return server;
    
};


var server = createServer();
server.listen(8003);