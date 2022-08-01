const { createNewTodolistByUserServiceValidation } = require("./todolists.services.validation");
const { Todolist } = require("../../models/todolist.model");

createNewTodolistByUserService = async (userId, todolistBody) => {
  //add user_id to todolist body
  todolistBody.user_id = userId;
  await createNewTodolistByUserServiceValidation(todolistBody);
  await new Todolist(todolistBody).save();
};

getAllTodolistByUserService = async (userId) => {
  const allTodolists = await Todolist.find({ user_id: userId });
  return allTodolists;
};

deleteAllTodolistByUserService = async (userId) => {
  console.log("deleteAllTodolistByUserService");
};

getOneTodolistByUserService = async (userId, todolistId) => {
  console.log("getOneTodolistByUserService");
};

editOneTodolistByUserService = async (userId, todolistId, editTodolistBody) => {
  console.log("editOneTodolistByUserService");
};

deleteOneTodolistByUserService = async (userId, todolistId) => {
  console.log("deleteOneTodolistByUserService");
};

module.exports = {
  getAllTodolistByUserService,
  createNewTodolistByUserService,
  deleteAllTodolistByUserService,
  getOneTodolistByUserService,
  editOneTodolistByUserService,
  deleteOneTodolistByUserService,
};
