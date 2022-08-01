const Joi = require("joi");
const { ValidationError } = require("../../helpers/customError/ValidationError");

registerValidation = async (registerBody) => {
  //   console.log(registerBody);
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

loginValidation = (loginBody) => {};

module.exports = { registerValidation, loginValidation };
