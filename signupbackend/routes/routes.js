//This folder is responsible for the routes and requests that comes to the server. 
const { response } = require('express');
const express = require('express');
const router = express.Router()

//When a user press the submit button and send the form input, it sends a post request to this route. 
//The first argument is the path, and the next argument is the callback function. 
router.post('/signup', (req, res) =>{
    response.send('send')
})

module.exports = router

//Creating a module schema by using mongoose. 