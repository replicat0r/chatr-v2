'use strict';
const router = require('express').Router();
const h = require('../helpers');

module.exports = function() {
    let routes = {
        'get': {
            '/': (req, res, next) => {
                res.render('login')
            },
            '/room': (req, res, next) => {
                res.render('rooms')

            },
            '/chat': (req, res, next) => {
                res.render('chatroom')
            },
            '/getsession': (req, res, next) => {
                res.send(req.session.favColor)
            },
            '/setsession': (req, res, next) => {
                req.session.favColor = "red"
                res.send("Session Set")
            }
        },
        'post': {

        },
        'NA': (req, res, next) => {
            res.status(404).sendFile(process.cwd() + '/views/404.html')
        }

    }
    return h.route(routes)

}
