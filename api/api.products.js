var db = require("../db/db.products.js");

// define the routes for /api/users
module.exports = function attachHandlers (router){ //, passport) {
    // get requests
    router.get('/api/products', list);
    router.get('/api/products/:id', view); 
};


function list(req, res)
{
    db.getAll(function(data){
        res.json(data);
    });
}

function view(req, res)
{ 
    db.getById(req.params.id, function(data){
        res.json(data);
    });
} 