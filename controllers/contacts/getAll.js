const { Contact } = require("../../models/contacts");
const getAll = async (req, res) => {
  const { id: owner } = req.user;
  const { page = 1, limit = 20, favorite = true } = req.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find(
    { owner, favorite },
    "-createdAt -updatedAt ",
    {
      skip,
      limit: Number(limit),
      favorite,
    }
  ).populate("owner", "email subscription");
  res.json(result);
};

module.exports = getAll;
