const { httpStatusCodes } = require("../httpStatusCode/httpStatusCode");

class UnauthorizedError {
  constructor(field) {
    this.responseError = {
      message: "Authentication credentials were missing or incorrect.",
      statusCode: httpStatusCodes.UNAUTHORIZED,
      error: { field: field, errType: "invalid" },
    };
  }
}

module.exports = { UnauthorizedError };
