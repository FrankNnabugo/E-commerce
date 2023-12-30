const {User} = require("../../Schema/UserSchema/authSchema");
const jwt = require("jsonwebtoken");
const{process} = require("dotenv").config(); 
const bcrypt = require("bcryptjs");
const{signUp} = require("../../Controllers/authControllers/signup");
const cookie = require("cookie-parser");



const login = async(req, res)=>{
    const{email, hashPassword} = req.body;
    const id = req.params.id;
    try{// tie this user to login, access & refreshToken, refreshtokenhandler,authmiddleware

        const user= await User.findOne({email});
        if(!user){
        res.status(401).json({mssg: "user doesn't exist"});
    }
    const checkPassword = await user.bcrypt.compare(hashPassword);
    if(!checkPassword){
    
      res.status(401).json({mssg: "invalid email or password"});
    }
    
const accessToken = jwt.sign({id:user}, process.env.JWT_ACCESS_TOKEN, {
    expiresIn:process.env.ACCESS_TOKEN_EXPIRE_TIME
});
res.headers("accessToken", accessToken)
user.accessToken = accessToken;


const refreshToken = jwt.sign({id:user}, process.env.JWT_REFRESH_TOKEN,{
expiresIn:process.env.REFRESH_TOKEN_EXPIRE_TIME
});

res.cookie("refreshToken", refreshToken,
{httpOnly:true,
    secure:true,
    sameSite:"strict" || "none"
});
user.refreshToken =refreshToken;

res.status(200).json({mssg: "user logged in:", user});
}
catch(err){
    res.status(500).json({mssg: "error occured while trying to login"});
}
}



module.exports = {login};