const { Contact } = require("../models");
const { createError } = require("../helpers");

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Contact.findByIdAndRemove(id);
    if (!result) {
      throw createError(404);
    }
    res.json("Contact`s deleted");
  } catch (error) {
    next(error);
  }
};

module.exports = remove;
