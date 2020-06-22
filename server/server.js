//init code
require('dotenv').config();
const express = require('express');
const app =  express();
const cors = require('cors');
//const bodyParser = require('body-parser');
const database = require('./database');
const port = process.env.PORT;




//server start
app.listen(port,() => console.log('Server is running'));
 



 