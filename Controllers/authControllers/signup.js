const {User} = require("../../Schema/UserSchema/authSchema");
const bcrypt = require("bcryptjs");

const signUp = async(req, res)=>{
    const{firstname, lastname, email, password} = req.body;
    try{
        
    const checkUser = await User.findOne({email});
    if(checkUser){
        res.status(400).json({message: "user already exists"});
    }

const hashPassword = await bcrypt.hash(password, 10);

const newUser = await User.create({firstname, lastname, email, hashPassword});

await newUser.save();
res.status(201).send("Sign up successful");
}
catch(err){
    console.err("error:", err);
    res.status(500).json({message: "an error occured while trying to signup user"})
}
}

module.exports ={signUp};