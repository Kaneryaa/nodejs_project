const adminControllers = require("../models/adminUsers");
const brcypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const adminUsers = require("../models/adminUsers");
const MASTER_KEY = "NOTESAPI";
const route = require("express").Router();
const Joi = require('joi');
const login = async (req, res) => {
    
    try{
         const email = req.body.email ;
         const password = req.body.password;
         const validateObject = Joi.object({
            email: Joi.string().required(),
            password : Joi.string().required()
            // password : Joi.string().required()
          });
          let emailSchema={email};
          let getemail = validateObject.validate(emailSchema)
          console.log(getemail);

       

        // console.log(userfetch.password);
        const userfetch = await adminUsers.findOne({ email: req.body.email });
       
          console.log(userfetch)
          console.log(userfetch.password);

        const comparePass = await brcypt.compare(req.body.password,userfetch.password);
        console.log(comparePass);

        if(!comparePass){
            return res.send("password does not matched");
        }

        const token = await jwt.sign({ _id: userfetch._id }, MASTER_KEY);
        console.log(token)
        return res.status(200).header("admin-token", token).send({ "admin-token": token });
    }catch(err){
        console.log(err);
        return res.send(err.message);
    }
    
  
};

module.exports = { login };