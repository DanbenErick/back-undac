// Importamos el módulo mysql
const mysql = require("mysql");

// Creamos la conexión
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "admision_cepre",
  // user: "root",
  // password: "",
  user: "root_test",
  password: "test",
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
const bodyParser = require('body-parser')
const routes = require('./src/routes/index')

const app = express();
const PORT = process.env.PORT || 8000;

// Archivos Estaticos
app.use(bodyParser.json())
app.use('/', routes)

// Apertura de un proceso
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
// Registro de un voucher de pago
app.post("/registrar-voucher", (req, res) => {
  const {
    proceso,
    fecha_reg,
    dni,
    nombre,
    monto: pago1,
    codigo,
    idusu,
    signup,
  } = req.body;
  console.log(req.body);

  const modalidad = "n";
  const carrera = 1;
  const sede_e = "n";
  const pago2 = null;
  const preparatoria = "n";
  const anio = "n";
  const turno = "n";

  // Ejecutamos la consulta
  connection.query(
    `INSERT INTO inscritos (dni, codigo, proceso, modalidad, carrera, sede_e, pago1, pago2, preparatoria, fecha_reg, anio, turno)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      dni,
      codigo,
      proceso,
      modalidad,
      carrera,
      sede_e,
      pago1,
      pago2,
      preparatoria,
      fecha_reg,
      anio,
      turno,
    ],
    (err, results) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log("Registro insertado correctamente");
    }
  );
  res.send("ok");
});

const utilitarios = {
  generarNumero4y5: (numero_requerido) => {
    let final = "";
    let suma = 0;
    for (let i = 0; i < numero_requerido; i++) {
      let numero = Math.floor(Math.random() * 10);
      if (numero < 6) numero = 4;
      else if (numero < 11) numero = 5;
      suma += numero;
      final += numero.toString();
    }
    return {final, suma}
  },
};

app.post("/registrar-datos-postulante", (req, res) => {
  // Generamos un número aleatorio entre 4 y 5
    const {sexo, nac, departamento, provincia, distrito, direccionActual, dis, tipodis, etnica, celular, fono, logo }  = req.body;
    const {dni, fecha_reg} = req.body;
//   sexo: MASCULINO
//   nac: 2023-12-14
//   Departamento: Amazonas
//   Provincia: Chachapoyas
//   Distrito: 010101
//   direccionActual: Av bolivar mz a1 lote 30
//   dis: SI
//   tipodis:
//   etnica: AYMARA
//   celular: 952354116
//   fono: 930617118
//   logo: (binary)

  //Tabla actitud
//   res1
//   res2
//   dni
//   total1
//   total2
//   fecha_reg
    const gen1 = utilitarios.generarNumero4y5(15);
    const gen2 = utilitarios.generarNumero4y5(15);
    const res1 = gen1.final;
    const res2 = gen2.final;
    const total1 = gen1.suma;
    const total2 = gen2.suma;

    console.log("datos ",res1, res2, total1, total2);

  // Ejecutamos la consulta
  connection.query(
    `INSERT INTO datos_comp(dni, sexo, fecha_nac, lugar_nac, direccion_act, disca, tipo_disca, etnica, fono1, fono2, foto, fecha_datos, colegio, tipo_colegio) VALUES  (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      'dni', 'sexo', 'fecha_nac', 'lugar_nac', 'direccion_act', 'disca', 'tipo_disca', 'etnica', 'fono1', 'fono2', 'foto', 'fecha_datos', 'colegio', 'tipo_colegio'
    ],
    (err, results) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log("Registro insertado correctamente");
      res.status(200).send({
        mensaje: "Proceso creado correctamente",
      });
      res.end()
    }
  );


  // Ejecutamos la consulta
  connection.query(`INSERT INTO actitud (res1, res2, dni, total1, total2, fecha_reg)
    VALUES (?, ?, ?, ?, ?, ?)`, [res1, res2, dni, total1, total2, fecha_reg], (err, results) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log('Registro insertado correctamente');
  });


});

app.listen(PORT, function () {
  console.log(`Esta el puerto ${PORT}`);
});
