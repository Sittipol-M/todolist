const Joi = require("joi");
const { ValidationError } = require("../../helpers/customError/ValidationError");

createNewTodolistByUserServiceValidation = async (todolistBody) => {
  const todolistSchema = Joi.object({
    user_id: Joi.string().required(),
    title: Joi.string().min(3).max(50).required(),
    description: Joi.string().min(10).max(100).required(),
    date: Joi.date().required(),
    isUrgent: Joi.boolean().required(),
    isImportant: Joi.boolean().required(),
  });

  try {
    await todolistSchema.validateAsync(todolistBody);
  } catch (error) {
    throw new ValidationError(error.details[0].type, error.details[0].context.key);
  }
};

editOneTodolistByUserServiceValidation = async (editTodolistBody) => {
  const editTodolistSchema = Joi.object({
    title: Joi.string().min(3).max(50),
    description: Joi.string().min(10).max(100),
    date: Joi.date(),
    isUrgent: Joi.boolean(),
    isImportant: Joi.boolean(),
  });

  try {
    await editTodolistSchema.validateAsync(editTodolistBody);
  } catch (error) {
    throw new ValidationError(error.details[0].type, error.details[0].context.key);
  }
};

module.exports = { createNewTodolistByUserServiceValidation, editOneTodolistByUserServiceValidation };
