const Estudiante = require('../models/estudianteModel')

exports.setVoucherDePago = (req, res) => {
    Estudiante.setVoucherDePago((result) => {
        res.json(result)
    })
}