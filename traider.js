var express = require('express');
var routes = require('./routes/routes.js');
 
 
createServer = function createServer () {
    
    var server = express();
    // specify middleware
    //server.use(express.cookieParser());
    
    //server.use(express.bodyParser());
    server.use(express.static(__dirname + '/public'));
    server.use('/product/*', express.static(__dirname + '/public'));
    server.use('/basket/', express.static(__dirname + '/public'));
     
    // attach router handlers
    routes.attachHandlers(server); //, passport);
    
    return server;
    
};
 

var server = createServer();
var port = Number(process.env.PORT || 5000);
server.listen(port, function() {
  console.log("Listening on " + port);
}); 
 