const express = require("express");
const productRouter = express.Router();
const{CreateProduct, singleProduct , allProducts, deleteProduct, updateProduct} = require("../../Controllers/productControllers/product");
const{cacheMiddleware} = require("../../middleware/cacheMiddleware");
const{authenticate} = require("../../middleware/auth");



productRouter.post("/", authenticate, CreateProduct)
productRouter.get("/:id",authenticate, cacheMiddleware, singleProduct);
productRouter.get("/", authenticate, cacheMiddleware, allProducts);
productRouter.delete("/:id",authenticate, cacheMiddleware, deleteProduct);
productRouter.put("/:id", authenticate, updateProduct);



module.exports ={productRouter}; 