const { Contact } = require("../models/");
const getAll = async (req, res, next) => {
  try {
    const result = await Contact.find({}, "-createdAt -updatedAt -__v");
    res.json(result);
  } catch (error) {
    // res.status(500).json({ message: "Server error" });
    next(error);
  }
};

module.exports = getAll;
