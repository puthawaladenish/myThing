//init code
require('dotenv').config();
const express = require('express');
const app =  express();
const cors = require('cors');
const morgan = require('morgan');
const port = process.env.PORT;
const database = require('./database');


//including controller
const usercrud = require('./controller/usercrud.js'); 


//middleware setup
app.use(morgan('dev'));
app.use(cors());
app.use('/api/user',usercrud);


//routes
app.all('/',(req,res)=>{
    res.json({
        status: true,
        message: "index page route is running"
    });
});

//server start
app.listen(port,() => console.log('Server is running'));