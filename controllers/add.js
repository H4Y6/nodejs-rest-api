const { Contact } = require("../models");
const { createError } = require("../helpers");

const Joi = require("joi");

const contactsAddSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .pattern(/\w+@\w+\.\w+/)
    .required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const add = async (req, res, next) => {
  try {
    const { error } = contactsAddSchema.validate(req.body);
    if (error) {
      // const err = new Error(error.message);
      // throw err;
      throw createError(400, error.message);
    }
    const result = await Contact.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = add;
