const { Contact, schemas } = require("../models");
const { createError } = require("../helpers");

const add = async (req, res, next) => {
  try {
    const { error } = schemas.addSchema.validate(req.body);
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
