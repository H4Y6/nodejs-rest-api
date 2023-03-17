const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const theContact = contacts.find((c) => c.id === contactId);
  if (!theContact) {
    return null;
  }
  return theContact;
};

const removeContact = async (contactId) => {};

const addContact = async (name, email, phone) => {};

const updateContact = async (name, email, phone) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
