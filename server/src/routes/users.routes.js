const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users.controller");
router.route("/users").get(usersController.getAllUserInformation);
router.route("/users/:user_id").get(usersController.getOneUserInformation).patch(usersController.editOneUserInformation);

module.exports = router;
