const { loginService, registerService } = require("../services/authentications.services/authentications.services");

login = (req, res) => {
  console.log("login");
  loginService(req.body);
  res.send("login");
};

register = (req, res) => {
  console.log("reigister");
  registerService(req.body);
  res.send("register");
};

module.exports = { login, register };
