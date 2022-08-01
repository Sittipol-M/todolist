const {
  getAllTodolistByUserService,
  createNewTodolistByUserService,
  deleteAllTodolistByUserService,
  getOneTodolistByUserService,
  editOneTodolistByUserService,
  deleteOneTodolistByUserService,
} = require("../services/todolists.services/todolists.services");

getAllTodolistByUser = (req, res) => {
  console.log("getAllTodolistByUser");
  getAllTodolistByUserService(req.params.user_id);
  res.send("getAllTodolistByUser");
};

createNewTodolistByUser = (req, res) => {
  console.log("createNewTodolistByUser");
  createNewTodolistByUserService(req.params.user_id);
  res.send("createNewTodolistByUser");
};

deleteAllTodolistByUser = (req, res) => {
  console.log("deleteAllTodolistByUser");
  deleteAllTodolistByUserService(req.params.user_id);
  res.send("deleteAllTodolistByUser");
};

getOneTodolistByUser = (req, res) => {
  console.log("getOneTodolistByUser");
  getOneTodolistByUserService(req.params.user_id, req.params.todolist_id);
  res.send("getOneTodolistByUser");
};

editOneTodolistByUser = (req, res) => {
  editOneTodolistByUserService(req.params.user_id, req.params.todolist_id);
  console.log("editOneTodolistByUser");
  res.send("editOneTodolistByUserp");
};

deleteOneTodolistByUser = (req, res) => {
  deleteOneTodolistByUserService(req.params.user_id, req.params.todolist_id);
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
