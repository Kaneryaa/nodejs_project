const mongoose = require("mongoose");
const constants=require("../config/constant");
const customUser=require('../models/customlogin')
const brcypt = require('bcrypt')

const getcustmrlogin=async (email,password) => {
    console.log(password)
    try{ 
        const userdata = await customUser.findOne({emailId : email});
        console.log(userdata);
        const comparedata = await brcypt.compare(password,userdata.password); 
        if(!comparedata){
            return  false
        } return userdata
     }catch(e){
        console.log(e);
        return e;
    }
}
module.exports={
    getcustmrlogin
}

