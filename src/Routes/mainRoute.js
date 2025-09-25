const { Router } = require('express');
const mainRoute = Router();

const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');

mainRoute.use('/users', userRoutes);
mainRoute.use('/products', productRoutes);

module.exports = mainRoute;