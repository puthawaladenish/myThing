const { JsonWebTokenError } = require("jsonwebtoken")

//init code
const jwt = require('jsonwebtoken');
const token_key = process.env.TOKEN_KEY;
const usermodel = require('../dbmodels/usermodel');

function verifyToken(req,res,next){
    const token = req.header['x-access-token'];
    //check token
    if (!token) {
        res.json({
            status:false,
            message:'Token not Provided'
        });
    }
    //token verification
    jwt.verify(token,token_key,(error,decoded)=>{
        if (error){
            res.json({
                status:false,
                message:'Fail to verify token',
                error:error
            });
        }
    });
}