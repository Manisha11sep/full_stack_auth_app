const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive= require('massive');
require('dotenv').config();
const axios=require('axios');
const userController = require('./user_controller')


const app = express();
app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(db => app.set('db', db));
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie :{
        maxAge: 1000 *60* 60* 24*14,
    },

}));

app.get('/auth/callback',userController.auth);
app.get('/api/profile',userController.profile);
app.post('/api/logout', userController.logout);

const PORT = 4000;
app.listen(PORT, () =>{
    console.log("server is listening on ", PORT)
})
