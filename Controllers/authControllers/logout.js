
const logOut = async(res)=>{
try{

    await res.clearCookie("refreshToken", {
       sameSite:"none",
       secure:true,
       path:"api/auth/refresh"
    });
    res.status(200).json({message: "user logged out:", })

}catch(err){
    console.err("error logging out:", err);
    res.status(500).json({message: "an error occcured while tyring to log user out"});
}
}

module.exports = {logOut};