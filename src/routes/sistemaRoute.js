const express = require('express');
const router = express.Router();
const sistemaController = require('../controllers/sistemaController')
// Definir rutas para estudiantes

router.post('/login', sistemaController.login)
router.post('/register', sistemaController.register)

// app.get('/data', authenticateToken, (req, res) => {
//     res.json({ data: 'Información protegida' });
//   });
  

module.exports = router;  