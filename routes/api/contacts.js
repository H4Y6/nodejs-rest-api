const express = require("express");
const Joi = require("joi");
const contacts = require("../../models/contacts");

const router = express.Router();

// const createError = () => {};

const contactsAddSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

router.get("/", async (req, res, next) => {
  try {
    const result = await contacts.listContacts();
    res.json(result);
  } catch (error) {
    // res.status(500).json({ message: "Server error" });
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await contacts.getContactById(id);
    if (!result) {
      // return res.status(404).json({ message: "Not found" });
      const error = new Error("Not found");
      error.status = 404;
      throw error;
    }
    res.json(result);
  } catch (error) {
    // res.status(500).json("Server Error");
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = contactsAddSchema.validate(req.body);
    if (error) {
      // const error = new Error("Server error");
      // throw error;
      next(error);
      return;
    }
    const { name, email, phone } = req.body;
    const result = await contacts.addContact(name, email, phone);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { error } = contactsAddSchema.validate(req.body);
    if (error) {
      next(error);
    }
    const { id } = req.params;
    const { name, email, phone } = req.body;
    const result = await contacts.updateContact(id, name, email, phone);
    if (!result) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await contacts.removeContact(id);
    if (!result) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json("Contact`s deleted");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
