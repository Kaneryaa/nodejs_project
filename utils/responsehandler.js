const responseHandler = async (
  res,
  responseCode,
  responseData,
  responseError,
  responseMsg,
  responseSuccess
) => {
  let result = {
    success: true,
    message: "",
    data: "",
    errors: "",
  };
  const msg = responseMessages[responseCode];
  result.success = responseSuccess
    ? responseSuccess
    : msg
    ? msg.success
    : false;
  result.message = responseMsg ? responseMsg : msg ? msg.message : "";
  result.data = responseData;
  result.errors = responseError;
  // console.log(result);
  res.status(msg ? msg.httpCode : 400).json(result);
  return;
};

var responseMessages = {
  200: {
    message: "",
    httpCode: 200,
    success: true,
  },
  201: {
    message: "",
    httpCode: 201,
    success: true,
  },
  500: {
    message: "Error occured while processing request, please try again later",
    httpCode: 200,
    success: false,
  },
  501: {
    message: "",
    httpCode: 200,
    success: false,
  },
  502: {
    message: "You are not authorized to perform this action",
    httpCode: 200,
    success: false,
  },
  401: {
    message: "You are not authorized to perform this action",
    httpCode: 401,
    success: false,
  },
  402: {
    message: "You are not authorized to perform this action",
    httpCode: 402,
    success: false,
  },
  403: {
    message: "You are not allow to perform this action",
    httpCode: 403,
    success: false,
  },
  404: {
    message: "Not Found",
    httpCode: 404,
    success: false,
  },
};

module.exports = {
  responseHandler,
};
