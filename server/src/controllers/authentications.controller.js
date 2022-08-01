const { loginService, registerService } = require("../services/authentications.services/authentications.services");

login = (req, res) => {
  console.log("login");
  loginService(req.body);
  res.send("login");
};

register = async (req, res) => {
  console.log("reigister");
  try {
    await registerService(req.body);
  } catch (error) {
    const responseError = error.responseError;
    res.status(responseError.statusCode).json(responseError);
  }
};

module.exports = { login, register };
