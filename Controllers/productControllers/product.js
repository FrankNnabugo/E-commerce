const{Product} = require("../../Schema/productSchema/productSchema");



const CreateProduct = async(req, res)=>{
   const{owner, title, description, category, price, images} = req.body;
   const{id} = req.params;

   try{
    const item = await Product.findById({id: _id});
    if(item){
    res.status(400).json({mssg: " product already exists"});
    }
   const newproduct = await new Product.create(owner, title, description, category, price, images)
   await newproduct.save();
   res.status(200).json(newproduct);

}
catch(err){
    console.err("err:", err)
    res.status(500).json({mssg: "error creating product"})
}
}



const singleProduct = async(req, res)=>{
    const{id} = req.params;
    try{
        const findProduct = await Product.findById({id: _id});
        if(!findProduct){
            res.status(400).json({mssg:"product doesn't"});
            if(findProduct){
            res.status(200).json(findProduct);
        }
    }
}
catch(err){
    console.err("err:", err)
    res.status(500).json({mssg: "error getting product"})
}
}


const allProducts = async(req, res)=>{

    try{
        const findAllProduct = await Product.find({}).sort({createdAt:-1});
        res.status(200).json(findAllProduct );
    }
    catch(err){
        console.err("err:", err)
        res.status(500).json({mssg: "internal server error"});
    }
}


const deleteProduct=async(req, res)=>{
    const{_id} = req.params;
    try{
        const findAndDelete =await Product.findOneAndDelete({id:_id});
        res.status(200).send("product deleted");
    }
    catch(err){
        console.err("err:", err)
        res.status(500).send("internal server error")
    }
}


const updateProduct=async(req, res)=>{
    const id = req.params.id;
    const objectID = mongoose.Types.ObjectId.isvalid;
    
    try{
        if(objectID !== id || _id){
            res.status(400).send("invalid id");
        }
const product = await Product.findByIdAndUpdate(id, req.body,{
    new: true})
    if(!product){
        res.status(404).send("product doesn't exist");
    }
    else{
        res.status(200).send(product)
    }
        }
        catch(err){
            res.status(500).json({err: "internal server error"})
        }
    }




    module.exports = {CreateProduct,singleProduct,allProducts,deleteProduct,updateProduct};