const { createUserController } = require("../controllers/usersControllers");

const getAllUserHandler = (req, res) => {
  const { name } = req.query;
  (name) ? res.send(`Traer el usuario ${name}`) : res.send('Traer los usuarios');
}

const getOneUserHandler = (req, res) => {
  const { id } = req.params;
  res.send(`Tráeme el usuario con id ${id}`);
}

const createUserHandler = (req, res) => {
  const { name, username, email } = req.body;
  const response = createUserController(name, username, email);
  res.status(201).send(`${name} - ${username} - ${email}`);
}

const updateUserHandler = (req, res) => {
  res.send('Usuario modificado');
}

const deleteUserHandler = (req, res) => {
  res.send('Usuario eliminado');
}

module.exports = {
  getAllUserHandler,
  getOneUserHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
};