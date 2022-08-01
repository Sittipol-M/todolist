const { httpStatusCodes } = require("../httpStatusCode/httpStatusCode");

class NotFoundError {
  constructor(message, field) {
    this.responseError = {
      message: message,
      statusCode: httpStatusCodes.NOT_FOUND,
      error: { errType: "notFound" },
    };
  }
}

module.exports = { NotFoundError };
