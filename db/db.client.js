var mongo = require("mongodb");
var MongoClient = mongo.MongoClient,
    Server = require('mongodb').Server,
    BSON = mongo.BSONPure;

var mongoclient = new MongoClient(new Server("127.0.0.1", 27017), {native_parser: true});
 
exports.getDbClient = function(){
    return mongoclient;
};

exports.dbName = function(){
    return "traider";
};
    
exports.makeObjectID = function(id){
    return new BSON.ObjectID(id);
};