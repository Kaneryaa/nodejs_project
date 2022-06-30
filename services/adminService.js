const mongoose = require("mongoose");
const constants=require("../config/constant");
const users = require('../models/customerModel');
const adminUsers = require("../models/adminUsers");
const brcypt = require('bcrypt')

const getloginProfile=async (email,password) => {
    try{

        const userfetch = await adminUsers.findOne({email : email});
        const comparePass = await brcypt.compare(password,userfetch.password);
        return userfetch
    }catch(e){
        console.log(e);
        return e;
    }
}
module.exports={
    getloginProfile
}