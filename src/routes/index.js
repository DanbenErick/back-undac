const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')

router.get('/hola', controller.ejemplo)

module.exports = router