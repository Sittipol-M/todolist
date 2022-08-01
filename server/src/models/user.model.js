const mongoose = require("mongoose");
const connection = mongoose.createConnection(process.env.MONGODB_URL);
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  fname: String,
  lname: String,
  email: String,
});

const User = connection.model("User", userSchema);
module.exports = { User };
