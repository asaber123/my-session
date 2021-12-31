const express  = require('express');
const app = express();
const mongoose = require('mongoose');
require("dotenv/config");
const routesUrls = require('./routes/routes');
const cors = require('cors');

//Connecting the react application to the mongoose database
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, () =>console.log("Connected to db"));

//activating bodyParser in the application
app.use(express.json())
app.use(cors())
//CReating our routes as a middlewere
app.use('/app', routesUrls)

//This is listening to port 400 as the react app is listening on 2000. 
app.listen(4000, () => console.log('server is running'));


