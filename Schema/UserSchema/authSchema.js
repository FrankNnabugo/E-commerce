const mongoose = require("mongoose");
const validate = require("express-validator");
const userSchema= new mongoose.Schema({


    firstname:{
        type:String,
        required:true
    },

    lastname:{
        type:String,
        required:true
    },

    email:{
        type:String, 
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw err("email is invalid")
            }
        }
    },
mobile:{
    type:String,
    required:true,
    unique:true
},

    password:{
        type:String,
        required:true,
        minlenght:7
    }
}, {timestamps:true})  



const User = mongoose.model("User" , userSchema);
module.exports = {User};