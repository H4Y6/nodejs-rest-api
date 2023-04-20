const { Contact } = require("../../models/contacts");
const getAll = async (req, res, next) => {
  const { id: owner } = req.user;
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find({ owner }, "-createdAt -updatedAt ", {
    skip,
    limit: 2,
  }).populate("owner", "email subscription");
  res.json(result);
};

module.exports = getAll;
