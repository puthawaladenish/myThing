const router = require ('express').router();
const jwt -require('jsonwebtoken');
const bodyparser = require('body-parser');
const {check,validationResult} = require('express-validator');
const token_key = process.env.TOKEN_KEY;
const moment = require('moment');
const usermodel = require('../dbmodels/usermodel');

//middleware setup
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({extended:true}));


router.all('/',(req,res)=>{
    res.json({
        status:true,
        message:'user controller default route'
    });
});