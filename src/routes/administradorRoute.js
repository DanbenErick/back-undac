const express = require('express');
const router = express.Router();
const administradorController = require('../controllers/administradorController')
// Definir rutas 
router.get('/', (req, res) => {
  res.send('Rutas de administradores');
});

// Apertura de un proceso
router.post("/crear-procesos", (req, res) => {});

// Registro de un voucher de pago
router.post("/registrar-voucher", administradorController.setVoucherDePago);
router.post("/crear-proceso", administradorController.crearProceso);


module.exports = router;