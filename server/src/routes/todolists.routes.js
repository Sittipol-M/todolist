const express = require("express");
const router = express.Router();

const todolistsController = require("../controllers/todolists.controller");
const { checkAuthTokenAndPermissions } = require("../middlewares/authToken/authToken");

router
  .route("/users/:user_id/todolists")
  .post(checkAuthTokenAndPermissions, todolistsController.createNewTodolistByUser)
  .get(checkAuthTokenAndPermissions, todolistsController.getOneTodolistByUser)
  .delete(todolistsController.deleteAllTodolistByUser);

router
  .route("/users/:user_id/todolists/:todolist_id")
  .patch(checkAuthTokenAndPermissions, todolistsController.editOneTodolistByUser)
  .get(checkAuthTokenAndPermissions, todolistsController.getOneTodolistByUser)
  .delete(checkAuthTokenAndPermissions, todolistsController.deleteOneTodolistByUser);

module.exports = router;
