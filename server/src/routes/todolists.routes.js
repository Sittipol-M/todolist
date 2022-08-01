const express = require("express");
const router = express.Router();

const todolistsController = require("../controllers/todolists.controller");

router
  .route("/users/:user_id/todolists")
  .post(todolistsController.createNewTodolistByUser)
  .get(todolistsController.getOneTodolistByUser)
  .delete(todolistsController.deleteAllTodolistByUser);

router
  .route("users/:user_id/todolists/:todolist_id")
  .patch(todolistsController.editOneTodolistByUser)
  .get(todolistsController.getOneTodolistByUser)
  .delete(todolistsController.deleteOneTodolistByUser);

module.exports = router;
