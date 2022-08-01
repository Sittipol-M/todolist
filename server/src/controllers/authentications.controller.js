login = (req, res) => {
  console.log("login");
  res.send("login");
};

register = (req, res) => {
  console.log("reigister");
  res.send("register");
};

module.exports = { login, register };
