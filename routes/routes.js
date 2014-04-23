  

exports.attachHandlers = function attachHandlers (server){ //, passport) {

    require('../api/api.products.js')(server); //, passport);  

};