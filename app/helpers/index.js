'use strict'
const router = require('express').Router();
const db = require('../db')


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

let findOne = function(profileID){
    return db.userModel.findOne({
        'profileId': profileID
    })
}

let createNewUser = function(profile){
    return new Promise((resolve, reject){
        let newChatUser = new db.userModel({
            profileId: profile.id,
            fullName: profile.displayName,
            profilePic: profile.photos[0].value || ''
        });
        newChatUser.save(function(e){
            if (e){
                console.log(e);
                reject(e);
            }else{
                resolve(newChatUser)
            }
        })
    })
}

module.exports = {
	route,
    createNewUser,
    findOne
}