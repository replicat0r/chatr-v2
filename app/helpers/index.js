'use strict'
const router = require('express').Router();


let _registerRoutes = (routes, methods) => {
    for (let key in routes) {
        if (typeof routes[key] === 'object' && routes[key] !== null && !(routes[key] instanceof Array)) {
            _registerRoutes(routes[key], key);
        } else {
            // register routes
            if (methods === 'get') {
                router.get(key, routes[key]);
            } else if (methods === 'post') {
                router.post(key, routes[key])
            }else{
            	router.use(routes[key])
            }
        }

    }

}

var route = function(routes){
	_registerRoutes(routes);
	return router;
}

module.exports = {
	route:route
}