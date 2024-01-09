
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



// create cart

//delete cart