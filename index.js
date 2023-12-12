const express = require("express");
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const routes = require('./src/routes/index')

const app = express();
const PORT = process.env.PORT || 8000;

// Archivos Estaticos
app.use(bodyParser.json())
app.use(cors());
app.use('/', routes)

app.listen(PORT, function () {
  console.log(`Esta el puerto ${PORT}`);
});
