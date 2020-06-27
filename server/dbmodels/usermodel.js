//init code
const mongoose = require('mongoose');
const moment = require('moment');

// User Schema Model

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    gender: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    bdate: {
        type: String,
        require:true
    },
    createdAt: {
        type: String,
        default: moment().format('DD/MM/YYYY') + ';' + moment().format('hh:mm:ss')
    }
});

//Create-User Model 
mongoose.model('userModel',userSchema);

//Export Module
module.exports = mongoose.model('userModel');