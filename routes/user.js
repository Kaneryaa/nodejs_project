const router = require("express").Router();
const { checkCUID } = require("../middleware/headers");
const config = require("../config/config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const _responseHelper = require("../helper/response");
const { HttpStatus } = require("../constants/httpstatus");
const userManager = require("../services/user.js");
// Register a new User
router.post("/user", checkCUID, async (req, res) => {
  // #swagger.tags = ['Users']
  /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Some description...',
                schema: {
                    $name: 'Jhon Doe',
                    $email: 'mayur@gmail.com',
                    $password: '123456'
                }
    } */
  /* #swagger.security = [{
               "apiKeyAuth": []
    }] */
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
  });
  const options = { abortEarly: false };
  const { error, value } = await schema.validate(req.body, options);
  if (error) {
    const errorMessage = await _responseHelper._response(
      "BAD_REQUEST",
      false,
      "Data validation failed",
      error.details.map((x) => x.message)
    );
    res.status(HttpStatus.BAD_REQUEST).send(errorMessage);
  }
  try {
    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashPassword;
    const saveUser = await userManager.register(req.body);
    if (saveUser) {
      const successMessage = {
        success: true,
        data: saveUser,
      };
      res.status(HttpStatus.OK).send(successMessage);
    }
  } catch (err) {
    const error = {
      success: false,
      errorCode: "BAD_REQUEST",
      error: `${error.details.map((x) => x.message).join(", ")}`,
    };

    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
});

module.exports = router;
