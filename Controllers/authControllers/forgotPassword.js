const { User } = require("../../Schema/UserSchema/authSchema");
const crypto = require("crypto");


const forgotPassword = async(req, res)=>{
    const {email} = req.body;

    try{
        const check = await User.findOne({email});
        if(!check){
            res.status(401).json({mssg: "user doesn't exist"});
        }

const token = await crypto.randomBytes(20).toString("hex");
const expiresIn = new Date(Date.now() + expiry * 1000); 
check.token = token;
check.expiresIn = expiresIn;
await check.token.save();
res.status(200).json({mssg: "token generated"});
}  
catch(err){
    console.err("err:", err)
    res.status(500).json({mssg: " error generating token"});
}
return {token, expiresIn};
}




module.exports = {forgotPassword};