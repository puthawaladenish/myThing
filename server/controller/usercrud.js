//init code
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const bodyparser = require('body-parser');
const { check, validationResult } = require('express-validator');
const userModel = require('../dbmodels/usermodel');
const moment = require('moment');


//middleware setup
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({ extended: true }));

//default route
router.all('/', (req, res) => {
    res.json({
        status: true,
        message: 'user controller default route'
    });
});

//register user 
router.post('/register', [
    check('firstname').not().isEmpty().trim().escape(),
    check('lastname').not().isEmpty().trim().escape(),
    check('email').isEmail().normalizeEmail(),
    check('gender').not().isEmpty().trim().escape(),
    check('password').not().isEmpty().trim().escape(),
    check('bdate').not().isEmpty().trim().escape()
], (req, res) => {
    const error = validationResult(req);
    if (error.isEmpty() === false) {
        res.json({
            status: false,
            message: 'Register Data Validation Error - Refference File:controller/usercrud',
            error: error.array()
        });
    }
    // user password hashing
    const hashPassword = bcrypt.hashSync(req.body.password,10);
    // store data to data base
    const temp = new userModel({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        gender: req.body.gender,
        bdate: req.body.bdate,
        password: hashPassword
    });
    temp.save((error, result) => {
        if (error) {
             res.json({
                status: false,
                message: 'User Register Failed - referrence: usercrud2',
                error: error
            });
        }
        res.json({
            status: true,
            message: 'user Register Successful',
            result: result
        });
    });
});


//export router
module.exports = router;