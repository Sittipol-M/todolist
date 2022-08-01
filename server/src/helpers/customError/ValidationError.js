const { httpStatusCodes } = require("../httpStatusCode/httpStatusCode");

class ValidationError {
  constructor(errType, field) {
    errType = errType.split(".")[1];
    this.responseError = {
      message: "Validation error in your request.",
      statusCode: httpStatusCodes.BAD_REQUEST,
      error: { field: field, errType: errType },
    };
  }
}

module.exports = { ValidationError };
