createNewTodolistByUserService = async (userId, todolistBody) => {
  console.log("createNewTodolistByUserService");
};

getAllTodolistByUserService = async (userId) => {
  console.log("getAllTodolistByUserService");
};

deleteAllTodolistByUserService = async (userId) => {
  console.log("deleteAllTodolistByUserService");
};

getOneTodolistByUserService = async (userId, todolistId) => {
  console.log("getOneTodolistByUserService");
};

editOneTodolistByUserService = async (userId, todolistId, todolistBody) => {
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
