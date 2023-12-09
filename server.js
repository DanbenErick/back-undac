// Importamos el módulo mysql
const mysql = require("mysql");

// Creamos la conexión
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "admision_cepre",
  user: "root",
  password: "",
});

// Conectamos a la base de datos
connection.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Conexión a la base de datos establecida");
});

const express = require("express");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const app = express();
const PORT = process.env.PORT || 8000;
// Archivos Estaticos

// const upload = multer({
//     storage: opcionesMulter
// });
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, "public")));
app.use(
  "/jquery",
  express.static(path.join(__dirname, "node_modules", "jquery", "dist"))
);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/procesos", (req, res) => {
  // Recibimos los datos
  const nombre = req.body.nombre;
  const estado = req.body.estado;
  const fecha = req.body.fecha;

  //   Validamos los datos
  if (!nombre) {
    return res.status(400).send({
      error: "El nombre es obligatorio",
    });
  }

  if (!estado) {
    return res.status(400).send({
      error: "El estado es obligatorio",
    });
  }

  if (!fecha) {
    return res.status(400).send({
      error: "La fecha es obligatoria",
    });
  }

  // Guardamos los datos
  const proceso = { nombre, estado, fecha };
  console.log(proceso);
  // Devolvemos una respuesta

  // Ejecutamos la consulta
  connection.query(
    `INSERT INTO procesos (nombre, estado, fecha) VALUES (?, ?, ?)`,
    [nombre, estado, fecha],
    (err, results) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log("Registro insertado correctamente");
    }
  );

  res.status(200).send({
    mensaje: "Proceso creado correctamente",
  });
  //   res.status(200)
  //   res.send("ok")
});
app.post("/registrar-voucher", (req, res) => {
    const {proceso,fecha_reg,dni,nombre,monto: pago1,codigo,idusu,signup} = req.body
    console.log(req.body)

    const modalidad = "n"
    const carrera = 1
    const sede_e = "n"
    const pago2 = null
    const preparatoria = "n"
    const anio = "n"
    const turno = "n"

    // Ejecutamos la consulta
  connection.query(`INSERT INTO inscritos (dni, codigo, proceso, modalidad, carrera, sede_e, pago1, pago2, preparatoria, fecha_reg, anio, turno)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [dni, codigo, proceso, modalidad, carrera, sede_e, pago1, pago2, preparatoria, fecha_reg, anio, turno], (err, results) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Registro insertado correctamente');
});
    res.send("ok")
})

app.listen(PORT, function () {
  console.log(`Esta el puerto ${PORT}`);
});
