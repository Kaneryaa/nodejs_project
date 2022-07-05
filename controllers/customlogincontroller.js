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
        email: Joi.string().required(),
        password : Joi.string().required()

     });
      let finalSchema={...body};
      let getSuccess = validateObject.validate(finalSchema)
      console.log(finalSchema);
      if (getSuccess.error) {
        console.log(getSuccess)
        return response.responseHandler(res, STATUS.BAD_REQUEST, [], [{"message":getSuccess.error.message}]);
       
      } else {  
        
         let userlogin = await customloginService.getcustmrlogin(req.body.email, req.body.password);
        const token = await jwt.sign({ _id: customloginService.getcustmrlogin._id }, MASTER_KEY);
        console.log(token)
        return response.responseHandler(res, STATUS.SUCCESS, [{"access Token":token}], [], SUCCESS.CUSTOMER_PROFILE, true);

        
     }

    }catch(error){
        console.log(error);
        response.responseHandler(res, STATUS.BAD_REQUEST, [], [] , ERROR.GLOBAL, false);
        return res.send(error.message);
    }
}

module.exports={
    getlogin
}