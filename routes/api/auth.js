const express = require("express");

const { basedir } = global;
const { ctrlWrapper } = require(`${basedir}/helpers`);
const ctrl = require(`${basedir}/controllers/auth`);
const { auth } = require(`${basedir}/middlewares`);

const router = express.Router();

router.post("/register", ctrlWrapper(ctrl.register));
router.post("/login", ctrlWrapper(ctrl.login));
router.get("/logout", auth, ctrlWrapper(ctrl.logout));

module.exports = router;
