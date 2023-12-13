const db = require('../config/db')
const Administrador = {}

Administrador.getProcesos = (callback) => {
  db.query("SELECT * FROM procesos ORDER BY id DESC", (err, result) => {
    if(err) throw err
    callback(result)
  })
}

Administrador.getVouchers = (callback) => {
  db.query('SELECT * FROM pagos ORDER BY id DESC LIMIT 10', (err, result) => {
    if(err) throw err
    callback(result)
  })
}
Administrador.guardarVoucher = (data, callback) => {
  db.query('INSERT INTO pagos (codigo, fecha, dni, nombre, proceso, monto, estado, usuario) VALUES (?,?,?,?,?,?,?,?)', [...data], (err, result) => {
    if(err) throw err
    callback(result)
  })
}
Administrador.findNombreForDNI = (data, callback) => {
  db.query("SELECT * FROM registro WHERE dni = ?", [...data], (err, result) => {
    if(err) throw err
    callback(result)
  })
}

Administrador.setVoucherDePago = (data, callback) => {
    // Ejecutamos la consulta
    const { proceso, fecha_reg, dni, nombre, pago1, codigo, idusu, signup, modalidad ,carrera ,sede_e ,pago2 ,preparatoria ,anio ,turno } = data
    db.query(
        `INSERT INTO inscritos (dni, codigo, proceso, modalidad, carrera, sede_e, pago1, pago2, preparatoria, fecha_reg, anio, turno)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [dni,codigo,proceso,modalidad,carrera,sede_e,pago1,pago2,preparatoria,fecha_reg,anio,turno],
        (err, result) => {
            if (err) throw err
            console.log("Registro insertado correctamente");
            callback(result)
        }
      );
}
Administrador.crearProceso = (data, callback) => {
  const { nombre, estado, fecha } = data
  db.query(
    `INSERT INTO procesos (nombre, estado, fecha) VALUES (?, ?, ?)`,
    [nombre, estado, fecha],
    (err, result) => {
      if (err) throw err
      console.log("Registro insertado correctamente");
      callback(result)  
    }
  );
}

module.exports = Administrador