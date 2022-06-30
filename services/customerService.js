const mongoose = require("mongoose");
const constants=require("../config/constant");
const users = require('../models/customerModel');


const getCustomerProfile=async (userId) => {
    try{
        let wherecondition={
            "_id":userId
        }

        let fields={
            "firstName":1,
            "lastName":1, 
            "emailId":1, 
            "_id":1,
            "mobileNumber": 1 
        }
       
        const result=await users.find(wherecondition, fields);
            if(result.length > 0){
                return result;
            }else{
                return [];
            }
    }catch(e){
        console.log(e);
        return e;
    }
}
module.exports={
    getCustomerProfile
}