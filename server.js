'use strict';
const PORT = process.env.PORT || 3000
const express = require('express');
const app = express();
const chatCat = require('./app')

app.set('port', PORT)
app.use(express.static('public'))
app.set('view engine','ejs')
app.use(chatCat.session);

app.use('/', chatCat.router)

app.listen(app.get('port'), () => {
    console.log(`Server running on ${PORT}`)
})