const { Contact } = require("../../models/contacts");
const { createError } = require("../../helpers");

const remove = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw createError(404);
  }
  res.json("Contact`s deleted");
};

module.exports = remove;
