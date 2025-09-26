const app = require('./src/app');
const users = require('./src/db/database');

require('dotenv').config({ quiet: true });

const port = process.env.PORT || 3001;

console.log('Hola mundo');

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});