const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const{Login} = require("../Controllers/authControllers/login");
const {accessToken, refreshToken} = require("cookie-parser");


const authenticate =async(req, res, next)=>{
    const accessToken = req.headers.accessToken;

if(!accessToken){
            res.status(401).json({mssg: "authorization token required"});
        }

    try{
        const decoded = await jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN);
        req.user= decoded;
    
        return next();
        }
        catch (error){
            console.error("error:", error);
            res.status(401)
            .json({mssg: "session expired, login to continue"});
        }
    
    }
        

module.exports = {authenticate};