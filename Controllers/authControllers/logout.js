
const Cookie = require ("cookie-parser");



const logOut = async(req, res)=>{

try{

    await res.clearCookie("accessToken", {
       sameSite:"none",
       secure:true,
    });
    res.status(200).json({message: "user logged out:", })

}catch(err){
    console.err("error logging out:", err);
    res.status(500).json({message: "an error occcured while tyring to log user out"});
}
}

module.exports = {logOut};