const express = require('express');
const router = express.Router();

// Definir rutas para estudiantes
router.get('/', (req, res) => {
  res.send('Rutas de estudiantes');
});


router.post("/registrar-datos-postulante", (req, res) => {
    // Generamos un número aleatorio entre 4 y 5
      const {sexo, nac, departamento, provincia, distrito, direccionActual, dis, tipodis, etnica, celular, fono, logo }  = req.body;
      const {dni, fecha_reg} = req.body;
  //   sexo: MASCULINO
  //   nac: 2023-12-14
  //   Departamento: Amazonas
  //   Provincia: Chachapoyas
  //   Distrito: 010101
  //   direccionActual: Av bolivar mz a1 lote 30
  //   dis: SI
  //   tipodis:
  //   etnica: AYMARA
  //   celular: 952354116
  //   fono: 930617118
  //   logo: (binary)
  
    //Tabla actitud
  //   res1
  //   res2
  //   dni
  //   total1
  //   total2
  //   fecha_reg
      const gen1 = utilitarios.generarNumero4y5(15);
      const gen2 = utilitarios.generarNumero4y5(15);
      const res1 = gen1.final;
      const res2 = gen2.final;
      const total1 = gen1.suma;
      const total2 = gen2.suma;
  
      console.log("datos ",res1, res2, total1, total2);
  
    // Ejecutamos la consulta
    // connection.query(
    //   `INSERT INTO datos_comp(dni, sexo, fecha_nac, lugar_nac, direccion_act, disca, tipo_disca, etnica, fono1, fono2, foto, fecha_datos, colegio, tipo_colegio) VALUES  (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    //   [
    //     'dni', 'sexo', 'fecha_nac', 'lugar_nac', 'direccion_act', 'disca', 'tipo_disca', 'etnica', 'fono1', 'fono2', 'foto', 'fecha_datos', 'colegio', 'tipo_colegio'
    //   ],
    //   (err, results) => {
    //     if (err) {
    //       console.error(err);
    //       return;
    //     }
  
    //     console.log("Registro insertado correctamente");
    //     res.status(200).send({
    //       mensaje: "Proceso creado correctamente",
    //     });
    //     res.end()
    //   }
    // );
  
  
    // Ejecutamos la consulta
    connection.query(`INSERT INTO actitud (res1, res2, dni, total1, total2, fecha_reg)
      VALUES (?, ?, ?, ?, ?, ?)`, [res1, res2, dni, total1, total2, fecha_reg], (err, results) => {
      if (err) {
        console.error(err);
        return;
      }
  
      console.log('Registro insertado correctamente');
    });
  
  
  });


module.exports = router;