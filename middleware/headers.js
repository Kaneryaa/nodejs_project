const config = require("../config/config");
const _responseHelper = require("../helper/response");
const { HttpStatus } = require("../constants/httpstatus");
exports.checkCUID = (req, res, next) => {
  const headers = req.headers;
  if (!headers["rp-cuid"]) {
    const errorMessage = _responseHelper._response(
      "UNAUTHORISED_REQUEST",
      false,
      "RP-CUID not found"
    );
    return res.status(HttpStatus.UNAUTHORIZED).send(errorMessage);
  }
  if (headers["rp-cuid"] != config.RP_CUID) {
    const errorMessage = _responseHelper._response(
      "UNAUTHORISED_REQUEST",
      false,
      "Invalid RP-CUID"
    );
    return res.status(HttpStatus.UNAUTHORIZED).send(errorMessage);
  }
  next();
};
