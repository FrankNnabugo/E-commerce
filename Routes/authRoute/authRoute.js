const express = require("express");
const authRouter = express.Router();
const {signUp} = require("../../Controllers/authControllers/signup");
const {login} = require("../../Controllers/authControllers/login");
const {forgotPassword } = require("../../Controllers/authControllers/forgotPassword");
const {logOut} = require("../../Controllers/authControllers/logout");
const {resetPassword} = require("../../Controllers/authControllers/updatePassword");
const{authenticate} = require("../../middleware/auth");
const {refresh} = require("../../Controllers/authControllers/refresh");
const{sendMail} = require("../../utils/sendMail");

authRouter.post("/signup", signUp);
authRouter.post("/login", authenticate, login);
authRouter.post("/forgotPassword", authenticate, forgotPassword)
authRouter.post("/logOut", logOut);
authRouter.post("/updatePassword", authenticate, resetPassword);
authRouter.post("/refresh", refresh);
authRouter.post("/sendMail", sendMail);
authRouter.post("/authenticate", authenticate);

module.exports ={authRouter};