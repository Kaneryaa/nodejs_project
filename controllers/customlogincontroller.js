const response=require("../utils/responsehandler")
const Joi = require("joi");
const customloginService= require("../services/customloginService");
const { STATUS } =require("../config/constant");
const { SUCCESS, ERROR } = require('../config/message');
const MASTER_KEY = "NOTESAPI";
const jwt = require("jsonwebtoken")

async function getlogin(req,res,next){
    try{

      let body = req.body;
      console.log(req.body);
      const validateObject = Joi.object({
        fname : Joi.string().required(),
        lname : Joi.string().requied(),
        email : Joi.string().trim().lowercase().required(),
        profilePic : Joi.string(),
        customerType : Joi.strim(),
        isActive : Joi.boolean(),
        mobileNumber:Joi.number(),
        address:Joi.string()
     });
      let finalSchema={...body};
      let getSuccess = validateObject.validate(finalSchema)
      console.log(finalSchema);
      if (getSuccess.error) {
        console.log(login)
        return response.responseHandler(res, STATUS.BAD_REQUEST, [], [{"message":getSuccess.error.message}]);
       
      } else {  
        
         let userlogin = await CustomerService.getcustmrlogin(req.body.email, req.body.password);
        const token = await jwt.sign({ _id: CustomerService.getcustmrlogin._id }, MASTER_KEY);
        console.log(token)
        return res.status(200).send({ "access token": token, userlogin:userlogin});
        
     }

    }catch(error){
        console.log(error);
        response.responseHandler(res, STATUS.BAD_REQUEST, [], [] , ERROR.GLOBAL, false);
        return;
    }
}

module.exports={
    getlogin
}