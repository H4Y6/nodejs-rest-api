const fs = require("fs/promises");
const multer = require("multer");
const path = require("path");

const { basedir } = global;
const { User } = require(`${basedir}/models/users`);

const setAvatar = async (req, res) => {};

module.exports = setAvatar;
