const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : false
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique: true
    },
    DOB : {
        type : Date,
        required : true
    },
    img : {
        type : String,
        required : false
    },
}, {timestamps : true});

exports.User = mongoose.model("User", UserSchema);