const { string } = require("joi");
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
    password: {
        type: String,
        required: true,
      },
      created_at : { 
        type: Date, 
        required: true, 
        default: Date.now 
    },
    updated_at : { 
        type: Date, 
        required: true, 
        default: Date.now 
    }
});

module.exports = mongoose.model("adminUsers", adminSchema);
