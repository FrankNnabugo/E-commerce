
const{Cart} = require("../../Schema/cartSchema/cartSchema");
const{User} = require("../../Schema/UserSchema/authSchema");
const{Product} = require("../../Schema/productSchema/productSchema");


const getCart = async(req, res)=>{
    const owner = req.User._id;
    try{
        const cart = await Cart.findOne({owner});
        if(cart && cart.Product.lenght > 0)
        res.status(200).send(cart);
    else{
        res.send(null);
    }

    } catch(err){
        res.status(500).json()
    }
}

module.exports = {getCart};



/** 

const createCart = async(req, res)=>{
const{productId,quantity, owner} = req.body;
try{
    const cart = await Cart.findOne({owner});
    const product =await Product.findOne({_id:productId});
    if(!product){
        res.status(404).send("product not found");
    }
    const price = product.price;
    const name = product.name;
    if(cart){
        const productIndex = cart.product.findIndex   

    }
}
}


        **/