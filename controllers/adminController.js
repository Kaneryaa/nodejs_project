const adminControllers = require("../models/adminUsers");
const brcypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const adminUsers = require("../models/adminUsers");
const SECRET_KEY = "NOTESAPI";
const route = require("express").Router();

const login = async (req,res) => {
    try{

        const hashedPasswd = await brcypt.hashSync(req.body.password ,10)
       //returns the first document that matches the query criteria or null

       const existingUser = await adminUsers.find({email : req.body.email});
       
       console.log(existingUser);
    //    res.send(existingUser)
        if(existingUser){
            const jsonLogin = JSON.stringify(existingUser);
            return res.send(jsonLogin)
            //return res.status(200).json({existingUser , message : "admin login successfully"})
        } else {
            console.log("wrong, something went wrong")
           return res.send({message : "something went wrong "})
        };

        // const token = jwt.login({ email : result.email, id : result.id}, SECRET_KEY);
        // res.status(201).json({user : result, token:token}
    }catch(err) {
        console.log(err);
        res.sendStatus(500).json({message : err.message})
    }

}


module.exports = { login };

// const login = async (req, res) => {
//   try {
//     const hashedPasswd = await brcypt.hashSync(req.body.password);
//     const admin = await adminUsers.find(
//       { email: req.body.email },
//       (err, data) => {
//         res.send(data);
//       }
//     );
//   } catch (e) {
//     res.send(e);
//   }
// };

// module.exports = { login };
