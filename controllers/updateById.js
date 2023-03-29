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

const updateById = async (req, res, next) => {
  try {
    const { error } = contactsAddSchema.validate(req.body);
    if (error) {
      throw createError(400, error.message);
    }
    const { id } = req.params;
    const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
      throw createError(404);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateById;
