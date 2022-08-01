const Joi = require("joi");
const { ValidationError } = require("../../helpers/customError/ValidationError");

registerValidation = async (registerBody) => {
  const registerSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().min(6).max(50).required(),
    fname: Joi.string()
      .regex(/^[A-Za-z0-9]+$/)
      .required(),
    lname: Joi.string()
      .regex(/^[A-Za-z0-9]+$/)
      .required(),
    email: Joi.string().email().required(),
  });

  try {
    await registerSchema.validateAsync(registerBody);
  } catch (error) {
    throw new ValidationError(error.details[0].type, error.details[0].context.key);
  }
};

loginValidation = async (loginBody) => {
  const loginSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().min(6).max(50).required(),
  });
  try {
    await loginSchema.validateAsync(loginBody);
  } catch (error) {
    throw new ValidationError(error.details[0].type, error.details[0].context.key);
  }
};

module.exports = { registerValidation, loginValidation };
