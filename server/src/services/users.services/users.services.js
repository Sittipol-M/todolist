const { User } = require("../../models/user.model");
const { editOneUserInformationServiceValidation } = require("./users.services.validation");
const { NotFoundError } = require("../../helpers/customError/NotFoundError");

getOneUserInformationService = async (userId) => {
  const foundUser = await User.findById(userId);
  if (!foundUser) {
    throw new NotFoundError("The user does not exist");
  }
  return { id: foundUser.id, fname: foundUser.fname, lname: foundUser.lname, email: foundUser.email };
};

editOneUserInformationService = async (userId, editBody) => {
  await editOneUserInformationServiceValidation(editBody);

  const foundUser = await User.findById(userId);
  if (!foundUser) {
    throw new NotFoundError("The user does not exist");
  }

  //edit user Information
  editBody.username ? (foundUser.username = editBody.username) : null;
  editBody.password ? (foundUser.password = editBody.password) : null;
  editBody.fname ? (foundUser.fname = editBody.fname) : null;
  editBody.lname ? (foundUser.lname = editBody.lname) : null;
  editBody.email ? (foundUser.email = editBody.email) : null;

  const savedUser = await foundUser.save();
  return { id: savedUser.id, fname: savedUser.fname, lname: savedUser.lname, email: savedUser.email };
};

module.exports = { getOneUserInformationService, editOneUserInformationService };
