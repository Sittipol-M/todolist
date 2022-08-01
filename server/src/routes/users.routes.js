const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users.controller");
//--> chceck authorization token
const { checkAuthTokenAndPermissions } = require("../middlewares/authToken/authToken");

router
  .route("/users/:user_id")
  .get(checkAuthTokenAndPermissions, usersController.getOneUserInformation)
  .patch(checkAuthTokenAndPermissions, usersController.editOneUserInformation);

module.exports = router;
