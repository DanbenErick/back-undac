const db = require('../config/db')
const Administrador = {}
Administrador.getDataForTablaResultados = (data, callback) => {
  
  db.query(`SELECT modalidad, sede_e, carrera FROM inscritos WHERE dni = ?`, data, (err, result) => {
    if(err) throw err
    
    callback(result)
  })
}
Administrador.registrarSolapaPuntaje = (data, callback) => {
  db.query("INSERT INTO puntaje (COD_FICHA, PUNTAJE, N_EXAMEN, SEDE) VALUES (?,?,?,?)", [...data], (err, result) => {
    if(err) throw err
    callback(result)
  })
}
Administrador.registrarSolapaPrincipal = (data, callback) => {
  db.query(`INSERT INTO
  resultados (PROCESO,
              SUBPROCESO,
              CODIGO,
              COD_FICHA,
              COD_FICHA2,
              POSTULANTE,
              P_OPCION,
              S_OPCION,
              PUNT_1,
              PUNT_2,
              PUNT_T,
              EST_1OPCION,
              EST_2OPCION,
              ASISTENCIA1,
              ASISTENCIA2,
              OPC_ING,
              ORD_M1OP,
              ORD_M2OP,
              AULA1,
              AULA2,
              SEDE,
              CONVENIO) VALUES 
              (
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?
              )`, [...data], (err, result) => {
    if(err) throw err
    callback(result)
  });
}

Administrador.getEstudiantesParaExamen = callback => {
  db.query(`SELECT inscritos.*, registro.*, inscritos.dni, vacantes.AREA2, vacantes.CODIGO_ESCUELA, vacantes.FACULTAD, vacantes.ESCUELA
  FROM inscritos
  LEFT JOIN registro ON registro.dni = inscritos.dni
  LEFT JOIN vacantes ON vacantes.CODIGO_ESCUELA COLLATE utf8mb3_spanish_ci = inscritos.carrera COLLATE utf8mb3_spanish_ci
  ORDER BY inscritos.id DESC
  LIMIT 150`, (err, result) => {
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
  db.query(`UPDATE inscritos
  SET carrera = ?,
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
  LEFT JOIN vacantes ON vacantes.CODIGO_ESCUELA COLLATE utf8mb3_spanish_ci = inscritos.carrera COLLATE utf8mb3_spanish_ci
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