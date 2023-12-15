const estudianteModel = require("../models/estudianteModel");
const utilitarios = require("../util/util");

exports.getProgramasEstudio = (req, res) => {
  res.json([
    { id: 1 ,codigo: 127001, nombre: "AGRONOMÃA (LA MERCED)" },
    { id: 2 ,codigo: 128001, nombre: "AGRONOMÃA (OXAPAMPA)" },
    { id: 3 ,codigo: 124001, nombre: "AGRONOMÃA (PASCO)" },
    { id: 4 ,codigo: 126001, nombre: "AGRONOMÃA (PAUCARTAMBO)" },
    { id: 5 ,codigo: 125001, nombre: "AGRONOMÃA (YANAHUANCA)" },
    { id: 6 ,codigo: 131001, nombre: "INDUSTRIAS ALIMENTARIAS (LA MERCED)" },
    { id: 7 ,codigo: 130001, nombre: "ZOOTECNIA (OXAPAMPA)" },
    { id: 8 ,codigo: 129001, nombre: "ZOOTECNIA (PASCO)" },
    { id: 9 ,codigo: 137001, nombre: "CIENCIAS DE LA COMUNICACION(LA MERCED) " },
    { id: 10 ,codigo: 136001, nombre: "CIENCIAS DE LA COMUNICACIA (PASCO)" },
    { id: 11,codigo: 107001, nombre: "BIOLOGÃA Y QUÃMICA (PASCO)" },
    { id: 13 ,codigo: 108001, nombre: "CIENCIAS SOCIALES, FILOSOFÃA Y PSICOLOGÃA EDUCATIVA (PASCO)",},
    { id: 15 ,codigo: 104001, nombre: "COMUNICACIÃN Y LITERATURA (PASCO)" },
    { id: 16 ,codigo: 100001, nombre: "EDUCACIAN INICIAL (PASCO)" },
    { id: 18 ,codigo: 103001, nombre: "EDUCACIÃN PRIMARIA (OXAPAMPA)" },
    { id: 19 ,codigo: 101001, nombre: "EDUCACIÃN PRIMARIA (FASCO)" },
    { id: 21 ,codigo: 102001, nombre: "EDUCACIAN PRIMARIA (YANAHUANCA)" },
    { id: 22 ,codigo: 105001, nombre: "HISTORIA, CIENCIAS SOCIALES Y TURISMO (PASCO)" },
    { id: 24 ,codigo: 109001, nombre: "LENGUAS EXTRANJERAS INGLÃ%OS - FRANCÃ%S (PASCO)" },
    { id: 25 ,codigo: 106001, nombre: "MATEMATICA - FÃSICA (PASCO)" },
    { id: 26 ,codigo: 110001, nombre: "TECNOLOGÃA, INFORMÁTICA Y TELECOMUNICACIONES (PASCO)" },
    { id: 27 ,codigo: 111001, nombre: "TECNOLOGÃA, INFORMÁTICA Y TELECOMUNICACIONES (YANAHL" },
    { id: 28 ,codigo: 123001, nombre: "CONTABILIDAD (PASCO)" },
    { id: 30 ,codigo: 122001, nombre: "ECONOMÃA (PASCO)" },
    { id: 31 ,codigo: 135001, nombre: "ADMINISTRACIÃN (PASCO)" },
    { id: 32 ,codigo: 138001, nombre: "DERECHO (PASCO)" },
    { id: 33 ,codigo: 116001, nombre: "INGENIERÃA AMBIENTAL (OXAPAMPA)" },
    { id: 34 ,codigo: 115001, nombre: "INGENIERÃA AMBIENTAL (PASCO)" },
    { id: 35 ,codigo: 117001, nombre: "INGENIERÃA CIVIL (PASCO)" },
    { id: 36 ,codigo: 114001, nombre: "INGENIERÃA DE SISTEMAS Y COMPUTACIÃN (PASCO)" },
    { id: 37 ,codigo: 113001, nombre: "INGENIERÃA GEOLÃGICA (PASCO)." },
    { id: 38 ,codigo: 112001, nombre: "INGENIERÃA METALÃSRGICA (PASCO)" },
    { id: 39 ,codigo: 134001, nombre: "INGENIERÃA DE MINAS (PASCO)" },
    { id: 40 ,codigo: 133001, nombre: "MEDICINA HUMANA (PASCO)" },
    { id: 41 ,codigo: 132001, nombre: "ODONTOLOGÃA (PASCO)" },
    { id: 42 ,codigo: 118001, nombre: "ENFERMERÃA (PASCO)" },
    { id: 43 ,codigo: 120001, nombre: "ENFERMERÃA (TARMA)" },
    { id: 44 ,codigo: 119001, nombre: "OBSTETRICIA (PASCO)" },
    { id: 45 ,codigo: 121001, nombre: "OBSTETRICIA (TARMA)" },
  ])
}

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
exports.getSedes = (req, res) => {
  res.json([
    
    {sede: "Tarma"},
    {sede: "la Merced"},
    {sede: "yanahuanca"},
    {sede: "Pasco"},
    {sede: 'Oxapampa'},
    {sede: 'Paucartambo'},
  ])
}
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
