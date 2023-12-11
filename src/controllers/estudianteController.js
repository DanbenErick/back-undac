const estudianteModel = require("../models/estudianteModel");
const utilitarios = require("../util/util");
exports.setVoucherDePago = (req, res) => {
  Estudiante.setVoucherDePago((result) => {
    res.json(result);
  });
};

exports.registrarDatosPostulante = (req, res) => {
  const {
    dni,
    sexo,
    nac: fecha_nac,
    Departamento,
    Provincia,
    Distrito,
    direccionActual: direccion_act,
    dis: disca,
    tipodis: tipo_disca,
    etnica,
    celular: fono1,
    fono: fono2,
    logo: foto,
    fecha_reg: fecha_datos,
    colegio,
    tipo_colegio
  } = req.body;
  let lugar_nac = "as"
  estudianteModel.getUbigerPorZona([Distrito, Provincia, Departamento], ( [resp] ) => {
    lugar_nac = resp.ubigeo
  })
  
  const dataEstudianteGeneral = [
    dni,
    sexo,
    fecha_nac,
    lugar_nac,
    direccion_act,
    disca,
    tipo_disca,
    etnica,
    fono1,
    fono2,
    foto,
    fecha_datos,
    colegio,
    tipo_colegio,
  ];
  estudianteModel.registrarDatosPostulante(dataEstudianteGeneral, (result) => {
    console.log(result)
  })
  const gen1 = utilitarios.generarNumero4y5(15);
  const gen2 = utilitarios.generarNumero4y5(15);
  const res1 = gen1.final;
  const res2 = gen2.final;
  const total1 = gen1.suma;
  const total2 = gen2.suma;
  const dataActitud = [gen1.final, gen2.final, dni, gen1.suma, gen2.suma, fecha_datos];
  estudianteModel.registrarActitud(dataActitud, (result) => {
    console.log(result)
    res.end()
  });
  console.log("datos ", dataActitud);
  
  
};
