const express = require('express');
const router = express.Router();
const administradorController = require('../controllers/administradorController')
const sistemaController = require('../controllers/sistemaController')
// Definir rutas 
router.get('/', (req, res) => {
  res.send('Rutas de administradores');
});
 
router.use(sistemaController.authenticaToken)

// Registro de un voucher de pago
router.post("/registrar-voucher", administradorController.setVoucherDePago);
router.post("/crear-proceso", administradorController.crearProceso);
router.post("/get-data-from-dni-estudiante", administradorController.getDataForDNIEstudiante);
router.post("/set-voucher", administradorController.setVoucher);
router.post("/registrar-datos-postulante", administradorController.registrarDatosPostulante)

router.get('/get-procesos', administradorController.getProcesos)
router.get('/get-vouchers', administradorController.getVouchers)

module.exports = router;