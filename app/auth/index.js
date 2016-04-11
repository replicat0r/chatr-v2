const passport = require('passport');
const config = require('../config');
const h = require('../helpers');
const FacebookStrategy = require('passport-facebook').Strategy;


module.exports = () =>{
	let authProcessor = (accessToken, refreshToken, profile, done){
		h.findOne(profile.id).then(function(result){
			if(result){
				done(null, result);
			}else{
				//create a new user and return
				h.createNewUser(profile)
				 .then(newChatUser => done(null, newChatUser))
				 .catch(e=>console.log('Error when creating a user'))
			}
		})


	}

	passport.use(new FacebookStrategy(config.fb, authProcessor) => {
		// find a user in the local db using profile. id
		// if the user is found, return the user data using done()
		// if the user is not found, create one in the local db and return
	})
}