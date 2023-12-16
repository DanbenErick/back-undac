const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path')
const administradorController = require('../controllers/administradorController')
const sistemaController = require('../controllers/sistemaController')


// Configuración de Multer
const storageImagen = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, `${req.body.dniEstudiante}${path.extname(file.originalname)}`);
  },
});




// const storageCSV = multer.diskStorage({
//   destination: './uploads/csvs/',
//   filename:  (req, file, cb) => {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//   },
// });




const storageCSV = multer.memoryStorage(); // Almacenar el archivo en memoria (Buffer)
const uploadCSV = multer({
  storage: storageCSV,
  limits: {
    fileSize: 1024 * 1024 * 25, // Límite de tamaño del archivo (en este caso, 25 MB)
  },
  
});





const uploadImagen = multer({ storage: storageImagen })
// const uploadCSV = multer({storage: storageCSV})
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
router.post("/editar-datos-postulante", administradorController.modificarDatosEstudianteTablaInscritosyGenerales)
router.post("/registrar-datos-postulante", uploadImagen.single('foto'), administradorController.registrarDatosPostulante)
router.post("/registrar-solapa-principal", uploadCSV.single('archivo'), administradorController.registrarSolapaPrincipal)
router.post("/registrar-solapa-secundario", uploadCSV.single('archivo'), administradorController.registrarSolapaSecundaria)

router.get('/get-procesos', administradorController.getProcesos)
router.get('/get-vouchers', administradorController.getVouchers)
router.get('/get-estudiantes-incritos-examen', administradorController.getEstudianteParaExamen)

module.exports = router;

