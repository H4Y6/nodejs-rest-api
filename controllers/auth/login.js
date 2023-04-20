const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { SECRET_KEY } = process.env;

const { basedir } = global;
const { User, schemas } = require(`${basedir}/models/users`);
const { createError } = require(`${basedir}/helpers`);

const login = async (req, res) => {
  const { error } = schemas.login.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw createError(401, "Email or password is wrong");
  }
  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) {
    createError(401, "Email or password is wrong");
  }
  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "2d" });
  const result = await User.findByIdAndUpdate(user._id, { ...req.body, token });
  res.json({ token, user: { email, subscription: result.subscription } });
};

module.exports = login;
