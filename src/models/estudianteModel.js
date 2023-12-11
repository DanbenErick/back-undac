const db = require("../config/db");
const Estudiante = {};

Estudiante.getUbigerPorZona = (data, callback) => {
  console.log(data)
  db.query(
    "SELECT ubigeo FROM ubigeo WHERE departamento = ? AND provincia = ? AND distrito = ?",
    [...data],
    (err, results) => {
      if (err) throw err;
      callback(results);
    }
  );
};
Estudiante.getDepartamentos = (callback) => {
  db.query("SELECT DISTINCT Departamento FROM ubigeo", (err, results) => {
    if (err) throw err;
    callback(results);
  });
};
Estudiante.getProvincias = (data, callback) => {
  db.query(
    "SELECT DISTINCT Provincia FROM ubigeo WHERE Departamento = ?",
    data,
    (err, results) => {
      if (err) throw err;
      callback(results);
    }
  );
};
Estudiante.getDistritos = (data, callback) => {
  console.log(data)
  db.query(
    "SELECT DISTINCT Distrito FROM ubigeo WHERE Departamento = ? AND Provincia = ?",
    [...data],
    (err, results) => {
      if (err) throw err;
      callback(results);
    }
  );
};

Estudiante.registrarDatosPostulante = (data, callback) => {
  // Ejecutamos la consulta
  db.query(
    `INSERT INTO datos_comp(dni, sexo, fecha_nac, lugar_nac, direccion_act, disca, tipo_disca, etnica, fono1, fono2, foto, fecha_datos, colegio, tipo_colegio) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [...data],
    (err, result) => {
      if (err) throw err;
      callback(result);
      // console.log("Registro insertado correctamente");
      // res.status(200).send({
      //   mensaje: "Proceso creado correctamente",
      // });
      // res.end()
    }
  );
};

Estudiante.registrarActitud = (data, callback) => {
  // Ejecutamos la consulta
  console.log("data", data)
  db.query(
    `INSERT INTO actitud (res1, res2, dni, total1, total2, fecha_reg)
      VALUES (?, ?, ?, ?, ?, ?)`,
    [...data],
    (err, result) => {
      if (err) throw err;
      console.log("Registro insertado correctamente");
      callback(result);
    }
  );
};

module.exports = Estudiante;
