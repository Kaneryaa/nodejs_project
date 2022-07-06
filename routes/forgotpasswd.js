const express = require('express');
const frgtPswd = require("../controllers/forgotpasswdController");
const frgtRouter = express.Router();


frgtRouter.post('/v1/forgotPass',frgtPswd.forgot_password);


module.exports = frgtRouter;