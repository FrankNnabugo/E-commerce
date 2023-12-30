const express = require("express");
const cartRouter = express.Router();
const{authenticate} = require("../../middleware/auth");
const{cacheMiddleware} = require("../../middleware/cacheMiddleware");
const{getCart} = require("../../Controllers/cartControllers/cart");


cartRouter.get("/cart", authenticate, cacheMiddleware, getCart);





module.exports = {cartRouter};