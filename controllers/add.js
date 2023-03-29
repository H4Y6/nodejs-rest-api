const { Contact, schemas } = require("../models");
const { createError } = require("../helpers");

const add = async (req, res, next) => {
  const { error } = schemas.addSchema.validate(req.body);
  if (error) {
    // const err = new Error(error.message);
    // throw err;
    throw createError(400, error.message);
  }
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

module.exports = add;
