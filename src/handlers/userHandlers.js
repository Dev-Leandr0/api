const { createUserController, getAllUsersController, getUsersByNameController, getOneUserByIdController, updateUserController, deleteUserController } = require("../controllers/usersControllers");

const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(3).required(),
  username: Joi.string().min(3).required(),
  email: Joi.string().email().required()
});

const createUserHandler = (req, res) => {
  try {

    const { error } = userSchema.validate(req.body);
    if (error) res.status(404).send(error.details[0].message);

    const { name, username, email } = req.body;
    const response = createUserController(name, username, email);
    res.status(201).send(response);
  } catch (error) {
    res.status(404).send({ Error: error.message });
  }
}

const getAllUserHandler = (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const response = getUsersByNameController(name);
      res.status(200).send(response);
    } else {
      const response = getAllUsersController();
      res.status(200).send(response);
    }
  } catch (error) {
    res.status(404).send({ Error: error.message });
  }

}

const getOneUserHandler = (req, res) => {
  try {
    const { id } = req.params;
    const response = getOneUserByIdController(id);
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send({ Error: error.message });
  }

}

const updateUserHandler = (req, res) => {
  const { id } = req.params;
  const { name, username, email } = req.body;
  const response = updateUserController(id, name, username, email);
  res.status(200).send(response);
}

const deleteUserHandler = (req, res) => {
  const { id } = req.params;
  const response = deleteUserController(id);
  res.status(200).send(response);
}

module.exports = {
  getAllUserHandler,
  getOneUserHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
};