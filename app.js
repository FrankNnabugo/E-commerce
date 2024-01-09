const express = require("express");
const dotenv = require("dotenv").config();
const {database} = require("./config/database");
const {authRouter} = require("./Routes/authRoute/authRoute");
const{authenticate} = require("./middleware/auth");
const{cacheMiddleware}=require("./middleware/cacheMiddleware");
const{productRouter}= require("./Routes/productRoute/productRoute");
const cors = require("cors");
const {errorHandler} = require("./middleware/errorHandler");
const {cartRouter} = require("./Routes/cartRoute/cartRoute");
const helmet = require("helmet");
const cookie = require("cookie-parser");
const app = express();



app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(authenticate);
app.use(cookie());
app.use(cacheMiddleware);
app.use((req, res, next)=>{
    console.log(req.method, req.body);
    next();
});
app.use(errorHandler);


app.use("/api/auth", authRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);




database();

module.exports = app;