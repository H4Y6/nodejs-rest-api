const { Contact } = require("../models");
const { createError } = require("../helpers");

const remove = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw createError(404);
  }
  res.json("Contact`s deleted");
};

module.exports = remove;
