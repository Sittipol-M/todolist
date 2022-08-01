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

editOneTodolistByUserService = async (editTodolistBody) => {
  //   const editTodolistSchema = Joi.object({
  //     user_id:
  //     username: Joi.string().alphanum().min(3).max(30).required(),
  //     password: Joi.string().min(6).max(50).required(),
  //     fname: Joi.string()
  //       .regex(/^[A-Za-z0-9]+$/)
  //       .required(),
  //     lname: Joi.string()
  //       .regex(/^[A-Za-z0-9]+$/)
  //       .required(),
  //     email: Joi.string().email().required(),
  //   });
  //   try {
  //     await editTodolistSchema.validateAsync(editTodolistBody);
  //   } catch (error) {
  //     throw new ValidationError(error.details[0].type, error.details[0].context.key);
  //   }
};

module.exports = { createNewTodolistByUserServiceValidation };
