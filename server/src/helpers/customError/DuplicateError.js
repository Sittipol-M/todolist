const { httpStatusCodes } = require("../httpStatusCode/httpStatusCode");

class DuplicateError {
  constructor(errType, field) {
    this.responseError = {
      message: "Duplicated data error in your request.",
      statusCode: httpStatusCodes.CONFLICT,
      field: field,
      errType: errType,
    };
  }
}

module.exports = { DuplicateError };
