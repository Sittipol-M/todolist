const {
  getAllTodolistByUserService,
  createNewTodolistByUserService,
  deleteAllTodolistByUserService,
  getOneTodolistByUserService,
  editOneTodolistByUserService,
  deleteOneTodolistByUserService,
} = require("../services/todolists.services/todolists.services");
const { httpStatusCodes } = require("../helpers/httpStatusCode/httpStatusCode");

getAllTodolistByUser = async (req, res, next) => {
  try {
    const allTodolists = await getAllTodolistByUserService(req.params.user_id);
    return res.status(httpStatusCodes.OK).json(allTodolists);
  } catch (error) {
    next(error);
  }
};

createNewTodolistByUser = async (req, res, next) => {
  try {
    await createNewTodolistByUserService(req.params.user_id, req.body);
    return res.status(httpStatusCodes.CREATED).json({ message: "The todolist was created successfully." });
  } catch (error) {
    next(error);
  }
};

deleteAllTodolistByUser = async (req, res, next) => {
  try {
    await deleteAllTodolistByUserService(req.params.user_id);
    return res.status(httpStatusCodes.NO_CONTENT);
  } catch (error) {
    next(error);
  }
};

getOneTodolistByUser = async (req, res, next) => {
  try {
    const oneTodolist = await getOneTodolistByUserService(req.params.user_id, req.params.todolist_id);
    return res.status(httpStatusCodes.OK).json(oneTodolist);
  } catch (error) {
    next(error);
  }
};

editOneTodolistByUser = async (req, res, next) => {
  try {
    const editedTodolist = await editOneTodolistByUserService(req.params.user_id, req.params.todolist_id, req.body);
    return res.status(httpStatusCodes.OK).json(editedTodolist);
  } catch (error) {
    next(error);
  }
};

deleteOneTodolistByUser = async (req, res, next) => {
  try {
    await deleteOneTodolistByUserService(req.params.user_id, req.params.todolist_id);
    return res.status(httpStatusCodes.NO_CONTENT);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTodolistByUser,
  createNewTodolistByUser,
  deleteAllTodolistByUser,
  getOneTodolistByUser,
  editOneTodolistByUser,
  deleteOneTodolistByUser,
};
