const express = require('express');
const router = express.Router();
const sistemaController = require('../controllers/sistemaController')
// Definir rutas para estudiantes

router.post('/login', sistemaController.login)
router.post('/register', sistemaController.register)


module.exports = router;  