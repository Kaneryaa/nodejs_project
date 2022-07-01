const mongoose = require("mongoose");
const constants=require("../config/constant");
const customer = require('../models/customLogin');
const getcustmrlogin=async (email,password) => {
    try{
        const userdata = await adminUsers.findOne({email : email});
        const comparedata = await brcypt.compare(password,userdata.password);
        return userfetch
       
    }catch(e){
        console.log(e);
        return e;
    }
}
module.exports={
    getcustmrlogin
}

