const {
  getOneUserInformationService,
  editOneUserInformationService,
} = require("../services/users.services/users.services");

const { httpStatusCodes } = require("../helpers/httpStatusCode/httpStatusCode");

getOneUserInformation = async (req, res, next) => {
  try {
    const userInformation = await getOneUserInformationService(req.params.user_id);
    return res.status(httpStatusCodes.OK).json(userInformation);
  } catch (error) {
    next(error);
  }
};

editOneUserInformation = async (req, res, next) => {
  try {
    const editedUser = await editOneUserInformationService(req.params.user_id, req.body);
    return res.status(httpStatusCodes.OK).json(editedUser);
  } catch (error) {
    next(error);
  }
};

module.exports = { getOneUserInformation, editOneUserInformation };
