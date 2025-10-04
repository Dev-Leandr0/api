const users = require('../db/database');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const registerController = async (name, username, email, password, role) => {
  const userExist = users.some((user) => user.email === email);
  if (userExist) {
    throw new Error("Usuario ya registrado");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = { name, username, email, password: hashPassword, role };
  if (!name || !username || !email || !password) throw new Error(`Los datos están incompletos`);
  users.push(newUser);
  return newUser;
};

const loginController = async (email, password) => {
  const user = users.find((user) => user.email === email);
  if (!user) {
    throw new Error("Usuario no registrado");
  }

  const passMatch = await bcrypt.compare(password, user.password);
  if (!passMatch) {
    throw new Error("Contraseña incorrecta");
  }


  const token = jwt.sign(
    { id: user.id, role: user.role },
    'MySecretKey',
    { expiresIn: '1h' }
  )
  console.log(token);

  const { password: _, ...userWithoutPass } = user;
  return { message: "Inicio de sesion exitoso", user: userWithoutPass, token };
}

module.exports = {
  registerController,
  loginController
}