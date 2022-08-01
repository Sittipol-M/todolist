const {
  createNewTodolistByUserServiceValidation,
  editOneTodolistByUserServiceValidation,
} = require("./todolists.services.validation");
const { Todolist } = require("../../models/todolist.model");
const { NotFoundError } = require("../../helpers/customError/NotFoundError");

createNewTodolistByUserService = async (userId, todolistBody) => {
  //add user_id to todolist body
  todolistBody.user_id = userId;
  await createNewTodolistByUserServiceValidation(todolistBody);
  await new Todolist(todolistBody).save();
};

getAllTodolistByUserService = async (userId) => {
  const foundAllTodolists = await Todolist.find({ user_id: userId });
  return foundAllTodolists;
};

deleteAllTodolistByUserService = async (userId) => {
  await Todolist.deleteMany({ user_id: userId });
};

getOneTodolistByUserService = async (userId, todolistId) => {
  const foundOneTodolist = await Todolist.findOne({ user_id: userId, _id: todolistId });
  if (!foundOneTodolist) {
    throw new NotFoundError("The todolist does not exist");
  }
  return foundOneTodolist;
};

editOneTodolistByUserService = async (userId, todolistId, editTodolistBody) => {
  await editOneTodolistByUserServiceValidation(editTodolistBody);
  const foundOneTodolist = await Todolist.findOne({ user_id: userId, _id: todolistId });
  if (!foundOneTodolist) {
    throw new NotFoundError("The todolist does not exist");
  }

  editTodolistBody.title ? (foundOneTodolist.title = editTodolistBody.title) : null;
  editTodolistBody.description ? (foundOneTodolist.description = editTodolistBody.description) : null;
  editTodolistBody.date ? (foundOneTodolist.date = editTodolistBody.date) : null;
  editTodolistBody.isUrgent !== undefined ? (foundOneTodolist.isUrgent = editTodolistBody.isUrgent) : null;
  editTodolistBody.isImportant !== undefined ? (foundOneTodolist.isImportant = editTodolistBody.isImportant) : null;

  const savedTodolist = await foundOneTodolist.save();
  return savedTodolist;
};

deleteOneTodolistByUserService = async (userId, todolistId) => {
  const foundOneTodolist = await Todolist.findOneAndDelete({ user_id: userId, _id: todolistId });
  if (!foundOneTodolist) {
    throw new NotFoundError("The todolist does not exist");
  }
};

module.exports = {
  getAllTodolistByUserService,
  createNewTodolistByUserService,
  deleteAllTodolistByUserService,
  getOneTodolistByUserService,
  editOneTodolistByUserService,
  deleteOneTodolistByUserService,
};
