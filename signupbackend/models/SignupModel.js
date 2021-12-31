const mongoose = require('mongoose');

//Here I create the model schema

const signupTemplate = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    userName:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

//Exporting the model, taking two argumnet, the name of the table and the name of the schema that has been created. 
module.exports = mongoose.model('myTable', signupTemplate)