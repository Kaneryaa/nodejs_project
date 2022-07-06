const config = require("../config/config");
const jwt = require("jsonwebtoken");
const { HttpStatus } = require("../constants/httpstatus");
const _responseHelper = require("../helper/response");

exports.verifyUserToken = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    const errorMessage = _responseHelper._response(
      "UNAUTHORISED_REQUEST",
      false,
      "Authorization token not found"
    );
    return res.status(HttpStatus.UNAUTHORIZED).send(errorMessage);
  }

  try {
    token = token.split(" ")[1]; // Remove Bearer from string

    if (token === "null" || !token) {
      const errorMessage = _responseHelper._response(
        "UNAUTHORISED",
        false,
        "Authorization token not found"
      );
      return res.status(HttpStatus.UNAUTHORIZED).send(errorMessage);
    }

    let verifiedUser = jwt.verify(token, config.TOKEN_SECRET); // config.TOKEN_SECRET => 'secretKey'
    if (!verifiedUser) {
      const errorMessage = _responseHelper._response(
        "UNAUTHORISED",
        false,
        "Invalid Authorization token"
      );
      return res.status(HttpStatus.UNAUTHORIZED).send(errorMessage);
    }
    req.user = verifiedUser; // user_id & user_type_id
    next();
  } catch (error) {
    const errorMessage = _responseHelper._response(
      "INTERNAL_SERVER_ERROR",
      false,
      "Something went wrong"
    );
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(errorMessage);
  }
};
