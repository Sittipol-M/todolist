const express = require("express");
const router = express.Router();

const authenticationsController = require("../controllers/authentications.controller");
router.route("/login").post(authenticationsController.login);
router.route("/register").post(authenticationsController.register);

module.exports = router;
