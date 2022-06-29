const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
    firstName:{
        type: String,  
    },
    lastName:{
        type: String,  
    },
    emailId:{
        type: String,  
    },
    mobileNumber:{
        type: String,  
    },
    userType:{
        type: Number,  
    },
    is_email_verified:{
        type: Number,  
    },
    is_mobile_verified:{
        type: Number,  
    },
    is_active:{
        type: Number,  
    },
    updatedAt:{
        type: Date,
    },
    createdAt:{
        type: Date,
    }
        
},{
    strict: true,
    strictQuery: true // Turn on strict mode for query filters
  })

module.exports = mongoose.model('customers', customerSchema)