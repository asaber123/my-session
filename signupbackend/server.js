const express  = require('express');
const app = express();

//This is listening to port 400 as the react app is listening on 2000. 
app.listen(4000, () => console.log('server is running'));
