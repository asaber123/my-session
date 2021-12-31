//This folder is responsible for the routes and requests that comes to the server. 
const { response } = require('express');
const express = require('express');
const router = express.Router()
//importing the schema that has been created
const SignupTemplateCopy = require('../models/SignupModel')

//When a user press the submit button and send the form input, it sends a post request to this route. 
//When the router post will run, all functions inside will also run. 
//The first argument is the path, and the next argument is the callback function. 
router.post('/signup', (req, res) =>{
    //Making an instance of the model, takeing all the post requests and putting the values into the schema. 
    const SignupUser = new SignupTemplateCopy({
        fullName: req.body.fullName,
        userName: req.body.userName,
        password: req.body.password,
        
    })
})

module.exports = router

//Creating a module schema by using mongoose. 