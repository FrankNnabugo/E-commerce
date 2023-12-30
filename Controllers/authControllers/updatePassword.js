const {User} = require("../../Schema/UserSchema/authSchema");
const {forgotPassword} = require("../../Controllers/authControllers/forgotPassword");


const resetPassword = async(req, res)=>{
  const{password} = req.body;
  const{token, expiresIn} = forgotPassword();


    try{
  const user = await User.find(User.token, {expiresIn : {$gt: Date.now() },
  });
  if(user){

  user.password = newPassword;
  user.token = undefined;
  user.expiresIn = undefined;
  await user.save();
  res.status(200).json({message: "password reset successfully"});
    }
  }

    catch(error){
      console.err("err", err);
      res.status(500).json({message: "error reseting password"});
    }
  }


module.exports = {resetPassword };