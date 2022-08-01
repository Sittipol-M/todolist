const mongoose = require("mongoose");
const connection = mongoose.createConnection(process.env.MONGODB_URL);

const todolistSchema = new mongoose.Schema({
  user_id: mongoose.objectId,
  title: String,
  description: String,
  date: Date,
  isUrgent: Boolean,
  isImportant: Boolean,
});

const Todolist = connection.model("Todolist", todolistSchema);
module.exports = { Todolist };
