const express = require('express');
const router = express.Router();
const administradorRoute = require('./administradorRoute');
const estudiantesRoutes = require('./estudianteRoute');

// Usar las rutas de profesores y estudiantes
router.use('/api/administrador', administradorRoute);
router.use('/api/estudiantes', estudiantesRoutes);

module.exports = router;