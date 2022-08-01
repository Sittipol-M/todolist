const { httpStatusCodes } = require("../httpStatusCode/httpStatusCode");

class ForbiddenError {
  constructor(message, errType, field) {
    this.responseError = {
      message: message,
      statusCode: httpStatusCodes.FORBIDDEN,
      error: { field: field, errType: errType },
    };
  }
}

module.exports = { ForbiddenError };
