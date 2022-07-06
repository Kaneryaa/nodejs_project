
const response=require("../utils/responsehandler")
const Joi = require("joi");
const password = require("../models/forgotPasswd");
const { STATUS } =require("../config/constant");
const { SUCCESS, ERROR } = require('../config/message');
const MASTER_KEY = "NOTESAPI";
const jwt = require("jsonwebtoken")
const randomstring = require('randomstring');
const { sendMain } = require("../services/forgotpasswdService");


const forgot_password = async(req,res) => {
  try {
    const email = req.body.email;
    const userdata = await password.findOne({email:email})

    if(userdata){
      const randomString = randomstring.generate();
      const frgtData = await password.updateOne({email:email},{$set:{token: randomString}})
      sendMain(userdata.name, userdata.email,randomString);
      res.status(200).send({success:true, msg:"Please check your email inbox and change your password."});
m    }else {
      res.status(200).send({success:true, msg:"this email does not exists."});

    }

  } catch(error){
     res.status(400).send({success:false, msg:error.message});
  }
}

module.exports={
  forgot_password
}