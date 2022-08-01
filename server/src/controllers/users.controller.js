
getAllUserInformation = async (req, res) => {
  console.log("getAllUserInformation");
  res.send("getAllUserInformation");
};

getOneUserInformation = async (req, res) => {
  console.log("getOneUserInformation");
  res.send("getOneUserInformation");
};

editOneUserInformation = async (req, res) => {
  console.log("editOneUserInformation");
  res.send("editOneUserInformation");
};

module.exports = { getAllUserInformation, getOneUserInformation, editOneUserInformation };
