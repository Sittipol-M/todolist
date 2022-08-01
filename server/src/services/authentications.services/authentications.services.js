const { loginValidation, registerValidation } = require("./authentications.services.validation");
const { User } = require("../../models/user.model");
const { DuplicateError } = require("../../helpers/customError/DuplicateError");
const { UnauthorizedError } = require("../../helpers/customError/UnauthorizedError");
const bcrypt = require("bcrypt");

const generateHashedPassword = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

const checkHashPassword = async (password, hashedPassword) => {
  const isPasswordChecked = await bcrypt.compare(password, hashedPassword);
  return isPasswordChecked;
};

loginService = async (loginBody) => {
  //validate data
  await loginValidation(loginBody);

  //check username and password
  const foundUser = await User.findOne({ username: loginBody.username });
  if (!foundUser) {
    throw new UnauthorizedError("username");
  }

  if (!(await checkHashPassword(loginBody.password, foundUser.password))) {
    throw new UnauthorizedError("password");
  }
};

registerService = async (registerBody) => {
  //validate data
  await registerValidation(registerBody);

  //check of duplicate data
  const foundUser = await User.findOne({ $or: [{ username: registerBody.username }, { email: registerBody.email }] });
  if (foundUser) {
    if (foundUser.username === registerBody.username) {
      throw new DuplicateError("duplicated", "username");
    } else if (foundUser.email === registerBody.email) {
      throw new DuplicateError("duplicated", "email");
    }
  }

  //hash password
  registerBody.password = await generateHashedPassword(registerBody.password);

  //create new User
  await new User(registerBody).save();
};

module.exports = { loginService, registerService };
