const{transporter} = require("../utils/nodemailer");

const sendMail = async(message)=>{
    try{

        const mail = await transporter.sendMail(message);
        res.status(200).json({mssg: " password reset token sent to user"})
    }

    catch(err){
        console.err("err:", err)
        res.status(500).send("error occured while sending mail");
    }
}


module.exports = {sendMail};