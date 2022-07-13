const Otp = require("../models/otp");
const customerlogin = require("../models/customlogin");
const jwt = require("jsonwebtoken");
const { response } = require("express");
const customlogin = require("../models/customlogin");
const MASTER_KEY = "NOTESAPI";
const frgt1 = require("../models/forgotPasswd");
const Joi = require("joi");
const responseHandler = require("../helper/response");

const changePasswod = async (req, res) => {
  const body = req.body;

  if (body.newPassword !== body.comfirmPassword) {
    // return  throw error
    res.send("Password mismatched expired");
  }
  // check validation
  let validateRegSchema = Joi.object({
    otp: Joi.string().required(),
    newPassword: Joi.string()
      .pattern(/^[A-Za-z0-9]{8,30}$/)
      .required(),
    comfirmPassword: Joi.string()
      .pattern(/^[A-Za-z0-9]{8,30}$/)
      .required(),
  }).validate(req.body, { abortEarly: false });
  if (validateRegSchema.error) {
    let errorMsg = responseHandler._response(
      "BAD_REQUEST",
      false,
      "Data Validation failed",
      null,
      validateRegSchema.error.details.map((x) => {
        return x.message;
      })
    );
    res.json(errorMsg);
    return;
  }
  const data = await Otp.find({ otp: body.otp });
  console.log("data");
  console.log(data);

  if (data) {
    let currentTime = new Date();
    if (currentTime < data[0].expireIn) {
      res.send("token expired");
    } else {
      console.log(data[0].customerId);
      console.log(body.newPassword);
      const updatePassword = await customlogin.updateOne(
        { _id: data[0].customerId },
        { password: body.newPassword }
      );
      console.log("updatePassword");
      console.log(updatePassword);
      res.send("success");
    }
  } else {
    // error throw
    res.send("Did not updated expired");
  }
};

module.exports = {
  changePasswod,
};
