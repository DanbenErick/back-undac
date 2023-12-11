const express = require('express');
const router = express.Router();
const estudianteController = require('../controllers/estudianteController')
// Definir rutas para estudiantes

router.post("/registrar-datos-postulante", estudianteController.registrarDatosPostulante);


module.exports = router;  