const express = require('express');
const router = express.Router();
const administradorController = require('../controllers/administradorController')
// Definir rutas para profesores
// router.get('/', (req, res) => {
//   res.send('Rutas de administradores');
// });

// Apertura de un proceso
// router.post("/procesos", (req, res) => {
//     // Recibimos los datos
//     const nombre = req.body.nombre;
//     const estado = req.body.estado;
//     const fecha = req.body.fecha;
  
//     //   Validamos los datos
//     if (!nombre) {
//       return res.status(400).send({
//         error: "El nombre es obligatorio",
//       });
//     }
  
//     if (!estado) {
//       return res.status(400).send({
//         error: "El estado es obligatorio",
//       });
//     }
  
//     if (!fecha) {
//       return res.status(400).send({
//         error: "La fecha es obligatoria",
//       });
//     }
  
//     // Guardamos los datos
//     const proceso = { nombre, estado, fecha };
//     console.log(proceso);
//     // Devolvemos una respuesta
  
//     // Ejecutamos la consulta
//     connection.query(
//       `INSERT INTO procesos (nombre, estado, fecha) VALUES (?, ?, ?)`,
//       [nombre, estado, fecha],
//       (err, results) => {
//         if (err) {
//           console.error(err);
//           return;
//         }
  
//         console.log("Registro insertado correctamente");
//       }
//     );
  
//     res.status(200).send({
//       mensaje: "Proceso creado correctamente",
//     });
//     //   res.status(200)
//     //   res.send("ok")
//   });
  // Registro de un voucher de pago
  router.post("/registrar-voucher", administradorController.setVoucherDePago);

module.exports = router;