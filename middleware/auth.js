const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const{Login} = require("../Controllers/authControllers/login");
const {accessToken, refreshToken} = require("cookie-parser");


const authenticate = async(req, res, next)=>{
    const{user} = login();
    const accessToken = req.headers["authorization"];

if(!accessToken){
            res.status(401).json({mssg: "authorization token required"});
        }

    try{
        const verifyAccessToken = await jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN);
        req.user = verifyAccessToken;
    
        return next();
        }
        catch (error){
            console.error("error:", error);
            res.status(401)
            .json({mssg: "session expired, login to continue"});
        }
    return verifyAccessToken;
    }
        

module.exports = {authenticate};