const express = require('express');
const router = express.Router();
const administradorRoute = require('./administradorRoute');
const estudiantesRoutes = require('./estudianteRoute');
const sistemaRoutes = require('./sistemaRoute')

// Usar las rutas de profesores y estudiantes
router.use('/api/administrador', administradorRoute);
router.use('/api/estudiantes', estudiantesRoutes);
router.use('/api/sistema', sistemaRoutes);

module.exports = router;