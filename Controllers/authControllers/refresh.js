const{login} = require("./login");
const { User } = require("../../Schema/UserSchema/authSchema");
const cookie = require("cookie-parser");




const refresh = async(req, res)=>{
    const refreshToken = req.cookies.refreshToken;
        if(!refreshToken){
            res.status(401).json({mssg: "no refresh token found"});   
        }
        try{
        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN);
        const accessToken = jwt.sign({id:decode.user}, process.env.JWT_ACCESS_TOKEN, {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRE_TIME});
            res.headers("accessToken", accessToken);
            res.send(decoded.user);
        }
        
    catch(err){
        res.status(400).send("invalid refresh token")
    }
}


module.exports = {refresh};