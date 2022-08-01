const express = require("express");
const router = express.Router();

const authenticationsController = require("../controllers/authentications.controller");
const { generateAuthToken } = require("../middlewares/authToken/authToken");

router.route("/login").post(authenticationsController.login, generateAuthToken);
router.route("/register").post(authenticationsController.register);

module.exports = router;
