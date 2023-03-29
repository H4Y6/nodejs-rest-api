const { Contact } = require("../models");
const { createError } = require("../helpers");

const Joi = require("joi");
const contactsUpdateStatusSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const updateStatus = async (req, res, next) => {
  try {
    const { error } = contactsUpdateStatusSchema.validate(req.body);
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

module.exports = updateStatus;