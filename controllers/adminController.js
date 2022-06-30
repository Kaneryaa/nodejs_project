const adminControllers = require("../models/adminUsers");
const brcypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const MASTER_KEY = "NOTESAPI";
const route = require("express").Router();
const Joi = require('joi');
const CustomerService= require("../services/adminService");
const response=require("../utils/responsehandler");
const { STATUS } =require("../config/constant");
const { SUCCESS, ERROR } = require('../config/message');

const login = async (req, res) => {
    
    try{
       
         const validateObject = Joi.object({
            email: Joi.string().required(),
            password : Joi.string().required()
            // password : Joi.string().required()
          });
          let body=req.body;
          let login = validateObject.validate({...body})
        //   console.log(getemail);
          
        //   console.log(userfetch)
        //   console.log(userfetch.password);
         if(login.error){
            console.log(login)
           return response.responseHandler(res, STATUS.BAD_REQUEST, [], [{"message":login.error.message}]);
          
         } else {  
           
            let Loginprofile = await CustomerService.getloginProfile(req.body.email, req.body.password);
           

           const token = await jwt.sign({ _id: CustomerService.getloginProfile._id }, MASTER_KEY);
           console.log(token)
           return res.status(200).send({ "access-token": token});
           
        }
    }catch(error){
        console.log(error);
        response.responseHandler(res, STATUS.BAD_REQUEST, [], [] , ERROR.GLOBAL, false);
        return;
    }
    
  
};

module.exports = { login };