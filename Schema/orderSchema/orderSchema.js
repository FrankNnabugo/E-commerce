const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;
const{User} = require("../../Schema/UserSchema/authSchema");
const{Product} = require("../../Schema/productSchema/productSchema");

const orderSchema = new mongoose.Schema({


owner:{
    type:objectId,
    ref:"User",
    unique:true
},

products:[{
    type:Array,
    default: [],
    ref:"Product"
}],

Address:{
type:String,
required:true
},

totalPrice:{
    type:Number,
    min:0,
    required:true
}

},{timestamps:true});