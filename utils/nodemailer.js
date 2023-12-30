const nodemail = require("nodemailer");
const dotenv = require("dotenv").config();

const data ={ service:"gmail",
host:"smtp.gmail.com",
secure:true,
auth:{
    user: process.env.USER_MAIL,
    pass: process.env.USER_PASSWORD
}
}


const transporter = nodemail.createTransport(data)
    
const message = {
"from": process.env.USER_MAIL,
"to": "franknnabugo224@gmail.com",
"subject": "password reset token",
    "text": "click the following to reset your password: http://localhost:3300/updatePassword/${passwordToken}",
};




module.exports = {transporter};

