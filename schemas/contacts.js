const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "string.min":
      "{{#label}} length must be at least {{#limit}} characters long",
    "string.max":
      "{{#label}} length must be less than or equal to {{#limit}} characters long",
    "any.required": "missing required {{#label}} field",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "{{#label}} must be a valid email",
    "any.required": "missing required {{#label}} field",
  }),
  phone: Joi.string().required().messages({
    "any.required": "missing required {{#label}} field",
  }),
});

module.exports = {
  addSchema,
};
