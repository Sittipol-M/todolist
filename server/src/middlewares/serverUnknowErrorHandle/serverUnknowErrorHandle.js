const { httpStatusCodes } = require("../../helpers/httpStatusCode/httpStatusCode");

serverUnknownErrorHandler = (error, req, res, next) => {
  if (error) {
    // console.log(error);
    if (error.responseError) {
      const responseError = error.responseError;
      res.status(responseError.statusCode).json(responseError);
      return next();
    }
    res.status(httpStatusCodes.INTERNAL_SERVER).json({
      statusCode: httpStatusCodes.INTERNAL_SERVER,
      errType: "error.internal",
      message: "Unknown Internal server error.",
    });
  }
  return next();
};
module.exports = { serverUnknownErrorHandler };
