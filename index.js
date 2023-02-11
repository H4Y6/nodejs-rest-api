const contacts = require("./contacts");
const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const list = await contacts.listContacts();
      console.log(list);
      break;

    case "get":
      const idContact = await contacts.getContactById(id);
      console.log(idContact);
      break;

    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const deleContact = await contacts.removeContact(id);
      console.log(deleContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
console.log(argv);
invokeAction(argv);
