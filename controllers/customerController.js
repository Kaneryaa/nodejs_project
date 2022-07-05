const response = require("../utils/responsehandler");
const Joi = require("joi");
const CustomerService = require("../services/customerService");
const { STATUS } = require("../config/constant");
const { SUCCESS, ERROR } = require("../config/message");

async function getprofile(req, res, next) {
  try {
    let body = req.body;
    console.log(req.body);
    const validateObject = Joi.object({
      userId: Joi.string().required(),
    });
    let finalSchema = { ...body };
    let getProfile = validateObject.validate(finalSchema);
    console.log(finalSchema);
    if (getProfile.error) {
      response.responseHandler(
        res,
        STATUS.BAD_REQUEST,
        [],
        [{ message: getProfile.error.message }]
      );
    } else {
      let profile = await CustomerService.getCustomerProfile(body.userId);
      response.responseHandler(
        res,
        STATUS.SUCCESS,
        [{ myprofile: profile }],
        [],
        SUCCESS.CUSTOMER_PROFILE,
        true
      );
    }
  } catch (error) {
    console.log(error);
    response.responseHandler(
      res,
      STATUS.BAD_REQUEST,
      [],
      [],
      ERROR.GLOBAL,
      false
    );
    return;
  }
}

module.exports = {
  getprofile,
};
