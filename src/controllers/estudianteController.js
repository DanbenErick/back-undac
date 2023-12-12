const estudianteModel = require("../models/estudianteModel");
const utilitarios = require("../util/util");

exports.getDicapacidades = (req, res) => {
  res.json([
    {discapacidad: "DISCAPACIDAD VISUAL"},
    {discapacidad: "VISUAL Y ESQUEMA CORPORAL"},
    {discapacidad: "DISMINUIDOS VISUALES"},
    {discapacidad: "DISCAPACIDAD AUDITIVA"},
    {discapacidad: "AUTISMO"},
    {discapacidad: "DISCAPACIDAD MENTAL"},
    {discapacidad: "PARALISIS CEREBRAL"},
    {discapacidad: "DISCAPACIDAD INTELECTURAL"},
    {discapacidad: "SORDOCEGUERA"},
    {discapacidad: "NO CUENTA CON INFORMACION"},
    {discapacidad: "OTROS"},
    {discapacidad: "SINDROME DE ASPERGUER"},
    {discapacidad: "HEMIPLEGIA NO IDENTIFICADA"},
    {discapacidad: "ESTENOSIS CONGENITA DE LA VALVULA AORTICA"},
    {discapacidad: "MULTIDISCAPACIDAD"},
    {discapacidad: "DISCAPACIDAD FISICA"},
    {discapacidad: "TRANSTORNO DEL ASPECTRO AUSTISTA"},
    {discapacidad: "T. POR DEFICIT DE ATENCION CON HIPERACTIVIDAD"},
    {discapacidad: "T. ESPECTRO DEL APRENDIZAJE"},
    {discapacidad: "T. MENTALES Y DEL COMPORTAMIENTO"},
    {discapacidad: "ENFERMEDADES RARAS"},
    {discapacidad: "TALLA BAJA"},
    {discapacidad: "ESTUDIANTE EN CONDICION DE HOSPITALIZACION TRATAMIENTO AMBULATORIO POR PERIODO PROLONGADO"},
    {discapacidad: "TALENTO"},
    {discapacidad: "SUPERDOTACION"}   
]);
};
exports.getEtnicas = (req, res) => {
  res.json([
    {etnia: "QUECHUA"},
    {etnia: "AYMARA"},
    {etnia: "NATIVO O INDIGENA DE LA AMAZONIA"},
    {etnia: "PERTENECIENTE O PARTE DE OTRO PUEBLO INDIGENA O ORIGINARIO"},
    {etnia: "NEGRO MORENO ZAMBO MULTARO PUEBLO AFROPERUANO O AFRODESENCIENTE"},
    {etnia: "BLANCO"},
    {etnia: "MESTIZO"},
    {etnia: "OTROS"},
    {etnia: "NO CUENTA CON INFORMACION"},
]);
};
exports.getDepartamentos = (req, res) => {
  estudianteModel.getDepartamentos((result) => {
    res.json(result);
  });
};
exports.getProvincias = (req, res) => {
  estudianteModel.getProvincias(req.query.departamento, (result) => {
    res.json(result);
  });
};
exports.getDistritos = (req, res) => {
  const { departamento, provincia } = req.query;
  estudianteModel.getDistritos([departamento, provincia], (result) => {
    res.json(result);
  });
};
exports.getUbigerPorZona = (req, res) => {
  const { departamento, provincia, distrito } = req.query;
  estudianteModel.getUbigerPorZona(
    [departamento, provincia, distrito],
    (result) => {
      res.json(result);
    }
  );
};

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
    tipo_colegio,
  } = req.body;
  let lugar_nac = "as";
  estudianteModel.getUbigerPorZona(
    [Distrito, Provincia, Departamento],
    ([resp]) => {
      lugar_nac = resp.ubigeo;
    }
  );

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
    console.log(result);
  });
  const gen1 = utilitarios.generarNumero4y5(15);
  const gen2 = utilitarios.generarNumero4y5(15);
  const res1 = gen1.final;
  const res2 = gen2.final;
  const total1 = gen1.suma;
  const total2 = gen2.suma;
  const dataActitud = [
    gen1.final,
    gen2.final,
    dni,
    gen1.suma,
    gen2.suma,
    fecha_datos,
  ];
  estudianteModel.registrarActitud(dataActitud, (result) => {
    console.log(result);
    res.end();
  });
  console.log("datos ", dataActitud);
};
