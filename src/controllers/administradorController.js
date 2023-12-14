

const Administrador = require('../models/administradorModel')


exports.setVoucher = (req, res) => {
    const { tipoVoucher, fecha, nombreCompleto, dni, monto, codigo } = req.body
    const data = [codigo, fecha, dni, nombreCompleto, tipoVoucher, monto, 'si', '67']
    Administrador.guardarVoucher(data, result => {
        res.json(result)
    })
}
exports.getVouchers = (req, res) => {
    Administrador.getVouchers(result => {
        res.json(result)
    })
}
exports.getDataForDNIEstudiante = (req, res) => {
    Administrador.findNombreForDNI([req.body.dni], result => {
        res.json(result)
    })
}
exports.registrarDatosPostulante = (req, res) => {
    console.table(req.file)
    const { apellidosNombres: nombreCompletoApoderado,
        celularApoderado,
        dniApoderado,
        dniEstudiante,
        selectModalidad,
        anioConclusion,
        tipoColegio,
        nombreColegio,
        selectSedeExamen,
        selectProgramaEstudio,
        genero,
        fechaNacimiento,
        inputUbigeo,
        selectDepartamentoEstudiant,
        selectProvinciaEstudiante,
        selectDistritoEstudiante,
        direccionActual,
        discapacidad,
        tipoDiscapacidad,
        identidadEtnica,
        celular,
        telefonoFijo,
        foto
         } = req.body
         let codigoCarrera
         Administrador.getIdCarreraForCodigo([selectProgramaEstudio], (resp) => {
            codigoCarrera = resp[0].CODIGO_ESCUELA
            Administrador.actualizarDatosApoderado([nombreCompletoApoderado, celularApoderado, dniApoderado, dniEstudiante], (result1) => {
                Administrador.registrarComplementariosEstudiante([dniEstudiante, genero, fechaNacimiento, inputUbigeo, direccionActual, discapacidad, tipoDiscapacidad, identidadEtnica, celular, telefonoFijo, `${dniEstudiante}.jgeg`, new Date(), nombreColegio, tipoColegio], (result2) => {
                    Administrador.registrarTablaInscriptos([dniEstudiante, selectProgramaEstudio, selectModalidad, selectModalidad, codigoCarrera, selectSedeExamen, 0, 'no', new Date(), anioConclusion], (result3) => {
                        res.json({ok: true, message: 'Se regristro correctamente', affecctRow: result1.affectedRows + result2.affectedRows + result3.affectedRows})
                    })
                })
            })
         })
    // dni, codigo, proceso, modalidad, carrera, sede_e, pago_1, preparatoria, fecha_reg, anio

    // datos_comp = datos estudiante
    // {dni,sexo,fecha_nac,lugar_nac,direccion_act,disca,tipo_disca,etnica,fono1,fono2,foto,fecha_datos,colegio,tipo_colegio,}
    // registro  = datos del apoderado
    // {apellido_p,apellido_m,nombres,tipo_documento,dni,correo,clave,fecha_reg,ap_no_apo,cel_apo,dni_apo}

    // console.table(req.body)
    // res.json(req.body)
}

exports.getProcesos = (req, res) => {
    Administrador.getProcesos((result) => {
        res.json(result)
    })
}

exports.setVoucherDePago = (req, res) => {
    const { proceso, fecha_reg, dni, nombre, monto: pago1, codigo, idusu, signup } = req.body
    const modalidad = "n";
    const carrera = 1;
    const sede_e = "n";
    const pago2 = null;
    const preparatoria = "n";
    const anio = "n";
    const turno = "n";
    const data = { proceso, fecha_reg, dni, nombre, pago1, codigo, idusu, signup, modalidad, carrera, sede_e, pago2, preparatoria, anio, turno }
    Administrador.setVoucherDePago(data, (result) => {
        res.json(result)
    })
}

exports.crearProceso = (req, res) => {
    // Recibimos los datos
    const { nombre, estado, fecha } = req.body
    Administrador.crearProceso(req.body, (result) => {
        res.status(200).json(result)
    })
    //   Validamos los datos
    //  if (!nombre) {
    //    return res.status(400).send({
    //      error: "El nombre es obligatorio",
    //    });
    //  }

    //  if (!estado) {
    //    return res.status(400).send({
    //      error: "El estado es obligatorio",
    //    });
    //  }

    //  if (!fecha) {
    //    return res.status(400).send({
    //      error: "La fecha es obligatoria",
    //    });
    //  }

    // Guardamos los datos

    // Devolvemos una respuesta

    // Ejecutamos la consulta



    //   res.status(200)
    //   res.send("ok")
}