const { basedir } = global;
const { User, schemas } = require(`${basedir}/models/users`);
const { createError } = require("../../helpers");

const updateSubscription = async (req, res) => {
  const { error } = schemas.subscription.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { _id: id } = req.user;
  await User.findByIdAndUpdate(id, req.body, { new: true });
  res.json(req.body);
};

module.exports = updateSubscription;
