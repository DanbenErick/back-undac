const db = require('../config/db')
const Estudiante = {}

Estudiante.setVoucherDePago = (callback) => {
    db.query('SELECT * FROM actitud', (err, result) => {
        if(err) throw err
        callback(result)
    })
}

module.exports = Estudiante