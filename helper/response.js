const _response = (code, success, message, data, error) => {
  let response = {};
  response.errorCode = code || "INTERNAL_SERVER_ERROR";
  response.success = success || false;
  response.message = message || "";
  if (data) {
    response.data = data;
  }
  if (error) {
    response.error = error;
  }

  return response;
};

module.exports = { _response };
