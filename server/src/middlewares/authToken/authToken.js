const { User } = require("../../models/user.model");
const jwt = require("jsonwebtoken");
const { httpStatusCodes } = require("../../helpers/httpStatusCode/httpStatusCode");
const { ForbiddenError } = require("../../helpers/customError/ForbiddenError");

generateAuthToken = async (req, res, next) => {
  try {
    const foundUser = await User.findOne({ username: req.body.username });
    const authToken = jwt.sign({ user_id: foundUser.id }, process.env.TOKEN_PRIVATE_KEY, { expiresIn: "1h" });
    return res
      .status(httpStatusCodes.OK)
      .header("authorization", authToken)
      .json({ message: "The user login successfully." });
  } catch (error) {
    next(error);
  }
};

checkAuthTokenAndPermissions = async (req, res, next) => {
  try {
    const authToken = req.headers.authorization;
    if (!authToken) {
      throw new ForbiddenError("A token is required for authorization.", "required", "authorizationToken");
    }
    const decoded = jwt.verify(authToken, process.env.TOKEN_PRIVATE_KEY);
    if (decoded.user_id !== req.params.user_id) {
      throw new ForbiddenError("The user does not have permission.", "permission", "authorizationToken");
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { generateAuthToken, checkAuthTokenAndPermissions };
