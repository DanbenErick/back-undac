const db = require('../config/db')
const Administrador = {}

Administrador.getEstudiantesParaExamen = callback => {
  db.query(`SELECT *, vacantes.area2
  FROM registro
  LEFT JOIN inscritos ON registro.dni = inscritos.dni
  LEFT JOIN vacantes ON vacantes.area COLLATE utf8mb3_spanish_ci = inscritos.codigo COLLATE utf8mb3_spanish_ci
  ORDER BY registro.id DESC
  LIMIT 100`, (err, result) => {
    if(err) throw err
    callback(result)
  })
}

Administrador.getProcesos = (callback) => {
  db.query("SELECT * FROM procesos ORDER BY id DESC", (err, result) => {
    if (err) throw err
    callback(result)
  })
}

Administrador.getVouchers = (callback) => {
  db.query('SELECT * FROM pagos ORDER BY id DESC LIMIT 10', (err, result) => {
    if (err) throw err
    callback(result)
  })
}


Administrador.modificarTablaInscritosPorEstudiante = (data, callback) => {
  console.log(`UPDATE inscritos
  SET codigo = ?,
      sede_e = ?,
      preparatoria = ?
  WHERE dni = ?`)
  console.log(data)
  db.query(`UPDATE inscritos
  SET codigo = ?,
      sede_e = ?,
      preparatoria = ?
  WHERE dni = ?`, [...data], (err, result) => {
    if (err) throw err
    callback(result)
  })



}
Administrador.modificarTablaRegistroPorEstudiante = (data, callback) => {
  db.query(`
  UPDATE registro
  SET apellido_p = ?,
      apellido_m = ?,
      nombres = ?
  WHERE dni = ?`, [...data], (err, result) => {
    if (err) throw err
    callback(result)
  })
}
Administrador.guardarVoucher = (data, callback) => {
  db.query('INSERT INTO pagos (codigo, fecha, dni, nombre, proceso, monto, estado, usuario) VALUES (?,?,?,?,?,?,?,?)', [...data], (err, result) => {
    if (err) throw err
    callback(result)
  })
}
Administrador.findNombreForDNI = (data, callback) => {

  db.query(`
  SELECT *, vacantes.area2
  FROM registro
  LEFT JOIN inscritos ON registro.dni = inscritos.dni
  LEFT JOIN vacantes ON vacantes.area COLLATE utf8mb3_spanish_ci = inscritos.codigo COLLATE utf8mb3_spanish_ci
  WHERE registro.dni = ?
  `, [...data], (err, result) => {
    if (err) throw err
    callback(result)
  })
}

Administrador.setVoucherDePago = (data, callback) => {
  // Ejecutamos la consulta
  const {
    proceso,
    fecha_reg,
    dni,
    nombre,
    pago1,
    codigo,
    idusu,
    signup,
    modalidad,
    carrera,
    sede_e,
    pago2,
    preparatoria,
    anio,
    turno
  } = data
  db.query(
    `INSERT INTO inscritos (dni, codigo, proceso, modalidad, carrera, sede_e, pago1, pago2, preparatoria, fecha_reg, anio, turno)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [dni, codigo, proceso, modalidad, carrera, sede_e, pago1, pago2, preparatoria, fecha_reg, anio, turno],
    (err, result) => {
      if (err) throw err
      console.log("Registro insertado correctamente");
      callback(result)
    }
  );
}
Administrador.crearProceso = (data, callback) => {
  const {
    nombre,
    estado,
    fecha
  } = data
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

Administrador.actualizarDatosApoderado = (data, callback) => {
  db.query("UPDATE registro SET ap_no_apo = ?, cel_apo = ?, dni_apo = ? WHERE dni = ?", [...data], (err, result) => {
    if (err) throw err
    callback(result)
  })
}

Administrador.registrarComplementariosEstudiante = (data, callback) => {
  db.query("INSERT INTO datos_comp (dni, sexo, fecha_nac, lugar_nac, direccion_act, disca, tipo_disca, etnica, fono1, fono2, foto, fecha_datos, colegio, tipo_colegio) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [...data], (err, result) => {
    if (err) throw err
    callback(result)
  })
}
Administrador.registrarTablaInscriptos = (data, callback) => {
  db.query("INSERT INTO inscritos (dni, codigo, proceso, modalidad, carrera, sede_e, pago1, preparatoria, fecha_reg, anio) VALUES (?,?,?,?,?,?,?,?,?,?)", [...data], (err, result) => {
    if (err) throw err
    callback(result)
  })
}
Administrador.getIdCarreraForCodigo = (data, callback) => {
  db.query('SELECT * FROM vacantes WHERE area = ?', [...data], (err, result) => {
    if (err) throw err
    console.log('Get datos exitoso')
    callback(result)
  })

}

module.exports = Administrador