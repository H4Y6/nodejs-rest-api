const { basedir } = global;
const { Contact, schemas } = require(`${basedir}/models/contacts`);
const { createError } = require(`${basedir}/helpers`);

const add = async (req, res, next) => {
  const { error } = schemas.addSchema.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });
  res.status(201).json(result);
};

module.exports = add;
