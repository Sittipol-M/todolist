const { loginValidation, registerValidation } = require("./authentications.services.validation");

loginService = async (loginBody) => {
  console.log("loginService");
};

registerService = async (registerBody) => {
  await registerValidation(registerBody);
};

module.exports = { loginService, registerService };
