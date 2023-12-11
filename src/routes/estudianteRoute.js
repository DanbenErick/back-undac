const express = require('express');
const router = express.Router();
const estudianteController = require('../controllers/estudianteController')
// Definir rutas para estudiantes

router.post("/registrar-datos-postulante", estudianteController.registrarDatosPostulante);

router.get('/get-departamentos', estudianteController.getDepartamentos)
router.get('/get-provincias', estudianteController.getProvincias)
router.get('/get-distritos', estudianteController.getDistritos)
router.get('/get-ubigeo', estudianteController.getUbigerPorZona)


module.exports = router;  