const Joi = require("joi");
const { ValidationError } = require("../../helpers/customError/ValidationError");

editOneUserInformationServiceValidation = async (editBody) => {
  const userInformationSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30),
    password: Joi.string().min(6).max(50),
    fname: Joi.string().regex(/^[A-Za-z0-9]+$/),
    lname: Joi.string().regex(/^[A-Za-z0-9]+$/),
    email: Joi.string().email(),
  });
  try {
    await userInformationSchema.validateAsync(editBody);
  } catch (error) {
    throw new ValidationError(error.details[0].type, error.details[0].context.key);
  }
};

module.exports = { editOneUserInformationServiceValidation };
