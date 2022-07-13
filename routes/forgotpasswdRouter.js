const express = require("express");
const frgtPswd = require("../controllers/forgotpasswdController");
const changepswd = require("../controllers/changePasswordController");
const frgtRouter = express.Router();

frgtRouter.post("/v1/forgotPass", frgtPswd.OtpSend);
frgtRouter.post("/v1/changepasswd", changepswd.changePasswod);

module.exports = frgtRouter;
