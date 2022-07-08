const response = require("../utils/responsehandler");
const Joi = require("joi");
const customerlogin = require("../models/customlogin");
const { STATUS } = require("../config/constant");
const { SUCCESS, ERROR } = require("../config/message");
const MASTER_KEY = "NOTESAPI";
const jwt = require("jsonwebtoken");
const randomstring = require("randomstring");
const Otp = require("../models/otp");

const OtpSend = async (req, res) => {
  let data = await customerlogin.find({
    email: req.body.email,
    mobileNumber: req.body.mobileNumber,
  });
  let id = await customerlogin.find({
    email: req.body.email,
    mobileNumber: req.body.mobileNumber,
  });
  console.log(id);
  const responseType = {};
  if (data) {
    let otpcode = Math.floor(Math.random() * 100000 + 1);
    let otpData = new Otp({
      customerId: id[0]._id,
      email: req.body.email,
      otp: otpcode,
      otpType: 1,
      otpSubType: 3,
      expireIn: new Date().getTime() + 300 * 1000,
    });

    let OtpResponse = await otpData.save();
    (responseType.statusText = "success"),
      (responseType.message = "please check your emil id");
  } else {
    (responseType.statusText = "error"),
      (responseType.message = "email id is not exist");
  }
  if (data) {
    let otpcode = Math.floor(Math.random() * 100000 + 1);
    let otpData = new Otp({
      customerId: id[0]._id,

      mobileNumber: req.body.mobileNumber,
      otp: otpcode,
      otpType: 2,
      otpSubType: 3,
      expireIn: new Date().getTime() + 300 * 1000,
    });
    let OtpResponse = await otpData.save();
    (responseType.statusText = "success"),
      (responseType.message = "OTP is send in your Number");
  } else {
    (responseType.statusText = "error"),
      (responseType.message = "Phone Number is wrong");
  }
  res.status(200).json(responseType);
};

module.exports = {
  OtpSend,
};
