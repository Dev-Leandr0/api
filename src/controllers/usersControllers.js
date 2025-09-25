const users = require('../db/database');

const createUserController = (name, username, email) => {
  const id = users.length + 1;
  const newUser = { id, name, username, email };
  console.log(newUser);
};

module.exports = {
  createUserController,
}