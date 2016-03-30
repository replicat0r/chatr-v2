'use strict'
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const config = require('../config')
const db = require('../db');

if (process.env === 'production') {
    module.exports = session({
        secret: config.sessionSecret,
        resave: false,
        saveUninitialize: false,
        store: new MongoStore({
        	mongooseConnection: db.Mongooose.connection
        })
    })
} else {
    module.exports = session({
        secret: config.sessionSecret,
        resave: false,
        saveUninitialize: true
    })
}
