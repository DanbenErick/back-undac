const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path')
const administradorController = require('../controllers/administradorController')
const sistemaController = require('../controllers/sistemaController')


// Configuración de Multer
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    console.log(file.fieldname)
    console.log(`${req.body.dniEstudiante}${path.extname(file.originalname)}`)
    cb(null, `${req.body.dniEstudiante}${path.extname(file.originalname)}`);
    // cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage:storage })

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
router.post("/registrar-datos-postulante", upload.single('foto'), administradorController.registrarDatosPostulante)

router.get('/get-procesos', administradorController.getProcesos)
router.get('/get-vouchers', administradorController.getVouchers)

module.exports = router;