'use strict';
const config = require('../config');
const Mongoose = require('mongoose').connect(config.dbURI);

Mongoose.connection.on('error',function(e){
	console.log(`MongoDB error: ${error}`)
})

const chatUser = new Mongoose.schema({
	profileId : String, 
	fullName: String, 
	profilePic: String,

})

let userModel = Mongoose.model('chatUser',chatUser);


module.exports = {
	Mongoose,
	userModel
}