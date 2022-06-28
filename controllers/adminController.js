const adminControllers = require("../models/adminUsers")
const brcypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { Router } = require("express");
const adminUsers = require("../models/adminUsers");
const SECRET_KEY = 'NOTESAPI';
const route = require('express').Router();


const login = async (req,res) => { 
    try{

        const {fname,lname, email, password,created_at,updated_at} = req.body;
        const hashedPasswd = await brcypt.hashSync(password ,10)
        const result = await adminUsers.create({

            fname: fname,
            lname: lname,
            email : email,
            password : hashedPasswd,
            created_at : created_at,
            updated_at : updated_at

        
        });

       
        const existingUser= await adminUsers.findOne({email : email});
        if(existingUser){
            return res.status(400).json({message :"user already exists"})
        }

       

        const token = jwt.login({ email : result.email, id : result.id}, SECRET_KEY);
        res.status(201).json({user : result, token:token})
    } catch(err){
        console.log(err);
        res.status(500).json({message : "something went wrong"})
    }
}

module.exports = { login };