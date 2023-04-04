const express = require("express");
const { basedir } = global;
const { ctrlWrapper } = require(`${basedir}/helpers`);
const ctrl = require(`${basedir}/controllers/auth`);

const router = express.Router();

router.post("/register", ctrlWrapper(ctrl.register));

module.exports = router;
