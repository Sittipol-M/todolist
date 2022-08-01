getAllTodolistByUser = (req, res) => {
  console.log("getAllTodolistByUser");
  res.send("getAllTodolistByUser");
};

createNewTodolistByUser = (req, res) => {
  console.log("createNewTodolistByUser");
  res.send("createNewTodolistByUser");
};

deleteAllTodolistByUser = (req, res) => {
  console.log("deleteAllTodolistByUser");
  res.send("deleteAllTodolistByUser");
};

getOneTodolistByUser = (req, res) => {
  console.log("getOneTodolistByUser");
  res.send("getOneTodolistByUser");
};

editOneTodolistByUser = (req, res) => {
  console.log("editOneTodolistByUser");
  res.send("editOneTodolistByUserp");
};

deleteOneTodolistByUser = (req, res) => {
  console.log("deleteOneTodolistByUser");
  res.send("deleteOneTodolistByUser");
};

module.exports = {
  getAllTodolistByUser,
  createNewTodolistByUser,
  deleteAllTodolistByUser,
  getOneTodolistByUser,
  editOneTodolistByUser,
  deleteOneTodolistByUser,
};
