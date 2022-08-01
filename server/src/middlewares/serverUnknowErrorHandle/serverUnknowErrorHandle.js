const { httpStatusCodes } = require("../../helpers/httpStatusCode/httpStatusCode");

serverUnknownErrorHandler = (error, req, res, next) => {
  if (error) {
    res.status(httpStatusCodes.INTERNAL_SERVER).json({
      statusCode: httpStatusCodes.INTERNAL_SERVER,
      errType: "error.internal",
      message: "Unknown Internal server error.",
    });
  }

  return next();
};
module.exports = { serverUnknownErrorHandler };
