const {User} = require("../../Schema/UserSchema/authSchema");
const bcrypt = require("bcryptjs");

const signUp = async(req, res)=>{
    const{firstname, lastname, email, password} = req.body;
    try{
        // check if user exist
    const checkUser = await User.findOne({email});
    if(checkUser){
        res.status(400).json({message: "user already exists"});
    }

// hashPassword
const hashPassword = await bcrypt.hash("password", 10);
//create new user
const newUser = await new User.create({firstname, lastname, email, hashPassword});
//save new user
await newUser.save();
res.status(201).send("Sign up successful");
}
catch(err){
    console.err("error:", err);
    res.status(500).json({message: "an error occured while trying to signup user"})
}
}

module.exports ={signUp};