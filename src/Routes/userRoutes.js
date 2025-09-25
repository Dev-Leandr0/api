const { Router } = require('express');
const { getAllUserHandler, getOneUserHandler, createUserHandler, updateUserHandler, deleteUserHandler } = require("../handlers/userHandlers")

const userRoutes = Router();

// Usuarios
userRoutes.get('/', getAllUserHandler);

userRoutes.get('/:id', getOneUserHandler);

userRoutes.post('/', createUserHandler);

userRoutes.put('/:id', updateUserHandler);

userRoutes.delete('/:id', deleteUserHandler);

module.exports = userRoutes;