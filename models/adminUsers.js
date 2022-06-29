const Joi = require("joi");
const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    fname:{
        type: String,
        require:true
    },
    lname:{
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    // email: {
    //     type: String,
    //     required: true,
    //     match: [/.+\@.+\..+/, 'Please enter a valid email'],
    //     validate: [validatePresenceOf, 'Email cannot be blank']
    // },
    
    password: {
        type: String,
        required: true,
      },
      created_at : { 
        type: Date, 
        required: true, 
        default: Date.now() 
    },
    updated_at : { 
        type: Date, 
        required: true, 
        default: Date.now()
    }
});

module.exports = mongoose.model("adminusers", adminSchema);
