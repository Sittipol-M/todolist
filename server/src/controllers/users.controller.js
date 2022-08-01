const {
  getAllUserInformationService,
  getOneUserInformationService,
  editOneUserInformationService,
} = require("../services/users.services/users.services");

getAllUserInformation = async (req, res) => {
  console.log("getAllUserInformation");
  getAllUserInformationService();
  res.send("getAllUserInformation");
};

getOneUserInformation = async (req, res) => {
  console.log("getOneUserInformation");
  getOneUserInformationService(req.user_id);
  res.send("getOneUserInformation");
};

editOneUserInformation = async (req, res) => {
  console.log("editOneUserInformation");
  editOneUserInformationService(req.user_id);
  res.send("editOneUserInformation");
};

module.exports = { getAllUserInformation, getOneUserInformation, editOneUserInformation };
