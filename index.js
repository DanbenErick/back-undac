const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./src/routes/index')


const app = express();
const PORT = process.env.PORT || 8000;

// Archivos Estaticos
app.use(bodyParser.json())
app.use(cors());
app.use('/', routes)



// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);

  // Puedes enviar una respuesta de error al cliente, por ejemplo:
  res.status(500).send('Algo salió mal!');

  // O puedes pasar el control al siguiente middleware
  // next(err);
});

app.listen(PORT, function () {
  console.log(`Esta el puerto ${PORT}`);
});
