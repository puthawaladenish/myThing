const router = require ('express').Router();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const {check,validationResult} = require('express-validator');
const token_key = process.env.TOKEN_KEY;
const moment = require('moment');
const userModel = require('../dbmodels/userModel');

//middleware setup
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

//default route
router.all('/',(req,res)=>{
    res.json({
        status:true,
        message:'user controller default route'
    });
}
);

//register user 



//export router
module.exports = router;