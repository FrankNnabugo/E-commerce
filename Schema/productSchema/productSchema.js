const mongoose = require("mongoose");
const{User} = require("../../Schema/UserSchema/authSchema");
const objectId = mongoose.Schema.Types.ObjectId;

const productSchema = new mongoose.Schema({


    owner:{
        type:objectId,
        required:true,
        ref:"User"
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type:String,
        required: true
    },
 
    category:{
        type: String,
        required: true
    },

    images:{
        type:Array
    },

    price: {
        type: Number,
        required: true
    }

}, {timestamps: true})


const Product = mongoose.model("Product", productSchema);
module.exports = {Product};