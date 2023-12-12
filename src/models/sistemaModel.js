const db = require("../config/db");
const Sistema = {};

Sistema.findUser = (data, callback) => {
    db.query('SELECT * FROM usuario WHERE dni = ?', [...data], (err, result) => {
        if(err) throw err
        callback(result)
    })
}

// Sistema.login = (data, callback) => {
//   db.query(
//     "SELECT * FROM usuario WHERE dni = ?;",
//     [...data],
//     (err, results) => {
//       if (err) throw err;
//       callback(results);
//     }
//   );
// };

Sistema.register = (data, callback) => {
    db.query('INSERT INTO usuario (nombre, dni, clave, fecha, detalle) VALUES (?,?,?, ?, ?)', [...data], (err, result) => {
        if(err) throw err
        callback(result)
    })
}

module.exports = Sistema