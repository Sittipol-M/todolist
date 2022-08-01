const { loginService, registerService } = require("../services/authentications.services/authentications.services");
const { httpStatusCodes } = require("../helpers/httpStatusCode/httpStatusCode");

login = (req, res) => {
  console.log("login");
  loginService(req.body);
  res.send("login");
};

register = async (req, res, next) => {
  try {
    await registerService(req.body);
    return res.status(httpStatusCodes.CREATED).json({ message: "The user was registered successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = { login, register };
