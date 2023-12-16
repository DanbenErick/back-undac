const Administrador = require('../models/administradorModel')
const estudianteModel = require('../models/estudianteModel')
const utilitarios = require("../util/util");

exports.registrarSolapaPrincipal = (req, res) => {
    try {
        // Acceder al contenido del archivo
        
        const contenidoArchivo = req.file.buffer.toString('utf-8');

        // Hacer algo con el contenido del archivo
        const converJSON = utilitarios.generarJSONOfCSV(contenidoArchivo)
        const arrayData = []
        let index = 0
        for(let i = 0; i < converJSON.length; i++) {
            let element = converJSON[i]
            Administrador.getDataForTablaResultados(element.DNI, (resp) => {
                if(resp.length == 0){
                    resp = []
                    resp[0].carrera = ''
                    resp[0].sede_e = ''
                    resp[0].modalidad = ''
                }
                
                let arr = [
                    /*PROCESO*/ element.DNI,
                    /*SUBPROCESO*/ '',
                    /*CODIGO*/ '',
                    /*COD_FICHA*/ element.DARACOD,
                    /*COD_FICHA2*/ '',
                    /*POSTULANTE*/ '',
                    /*P_OPCION*/ resp[0].carrera,
                    /*S_OPCION*/ 0,
                    /*PUNT_1*/ 0.0,
                    /*PUNT_2*/ 0.0,
                    /*PUNT_T*/ 0.0,
                    /*EST_1OPCION*/ '',
                    /*EST_2OPCION*/ '',
                    /*ASISTENCIA1*/ 'SE PRESENTO',
                    /*ASISTENCIA2*/ 'SE PRESENTO',
                    /*OPC_ING*/ 0,
                    /*ORD_M1OP*/ 0,
                    /*ORD_M2OP*/ 0,
                    /*AULA1*/ element.AULA,
                    /*AULA2*/ element.AULA,
                    /*SEDE*/ resp[0].sede_e,
                    /*CONVENIO*/ resp[0].modalidad
                ]
                Administrador.registrarSolapaPrincipal(arr, (resp) => {
                })
            })
        }
        // if(index == converJSON.length) {
            res.status(200).json({'ok': true, mensaje:'Todo correcto'})
        // }else {
        //     res.status(500).json({'ok': true, mensaje:'Un de los datos no se registro'})
        // }
        

        // res.send('Archivo recibido y procesado.');
    } catch (error) {
        console.error('Error al procesar el archivo:', error);
        res.status(500).send('Error interno al procesar el archivo.');
    }
}
exports.registrarSolapaSecundaria = (req, res) => {
    try {
        // Acceder al contenido del archivo
        
        const contenidoArchivo = req.file.buffer.toString('utf-8');

        // Hacer algo con el contenido del archivo
        const converJSON = utilitarios.generarJSONOfCSV(contenidoArchivo)
        
        converJSON.forEach(element => {
            if(element.DARACOD == '' || element.DARACOD == null){
                return 
            }
            console.log([element.DARACOD, element['Nota directa'],'1','PASCO'])
            Administrador.registrarSolapaPuntaje([
                element.DARACOD,
                element['Nota directa'].split(',')[0],
                '1',
                'PASCO'
            ], (resp) => {
                
            })
        })
        // if(index == converJSON.length) {
            res.status(200).json({'ok': true, mensaje:'Todo correcto'})
        // }else {
        //     res.status(500).json({'ok': true, mensaje:'Un de los datos no se registro'})
        // }
        

        // res.send('Archivo recibido y procesado.');
    } catch (error) {
        console.error('Error al procesar el archivo:', error);
        res.status(500).send('Error interno al procesar el archivo.');
    }
}

exports.getEstudianteParaExamen = (req, res) => {
    Administrador.getEstudiantesParaExamen(resp => {
        res.json(resp)
    })
}

exports.modificarDatosEstudianteTablaInscritosyGenerales = (req, res) => {
    const {
        dni,
        ap_paterno,
        ap_materno,
        nombres,
        programa,
        area,
        sede,
        preparatoria
    } = req.body
    console.log(req.body)
    Administrador.modificarTablaInscritosPorEstudiante([programa, sede, preparatoria, dni], result1 => {
        Administrador.modificarTablaRegistroPorEstudiante([ap_paterno, ap_materno, nombres, dni], result2 => {
            res.json({
                ok: true,
                message: 'Se regristro correctamente',
                affecctRow: result1.affectedRows + result2.affectedRows
            })
        })

    })
}

exports.setVoucher = (req, res) => {
    const {
        tipoVoucher,
        fecha,
        nombreCompleto,
        dni,
        monto,
        codigo
    } = req.body
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
    const {
        apellidosNombres: nombreCompletoApoderado,
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

    const gen1 = utilitarios.generarNumero4y5(15);
    const gen2 = utilitarios.generarNumero4y5(15);
    const dataActitud = [gen1.final, gen2.final, dniEstudiante, gen1.suma, gen2.suma, new Date()];


    //  Administrador.getIdCarreraForCodigo([selectProgramaEstudio], (resp) => {
    // codigoCarrera = resp[0].CODIGO_ESCUELA
    Administrador.actualizarDatosApoderado([nombreCompletoApoderado, celularApoderado, dniApoderado, dniEstudiante], (result1) => {
        Administrador.registrarComplementariosEstudiante([dniEstudiante, genero, fechaNacimiento, inputUbigeo, direccionActual, discapacidad, tipoDiscapacidad, identidadEtnica, celular, telefonoFijo, `${dniEstudiante}.jpeg`, new Date(), nombreColegio, tipoColegio], (result2) => {
            Administrador.registrarTablaInscriptos([dniEstudiante, selectProgramaEstudio, selectModalidad, selectModalidad, selectProgramaEstudio, selectSedeExamen, 0, 'no', new Date(), anioConclusion], (result3) => {
                estudianteModel.registrarActitud(dataActitud, (result4) => {
                    res.json({
                        ok: true,
                        message: 'Se regristro correctamente',
                        affecctRow: result1.affectedRows + result2.affectedRows + result3.affectedRows + result4.affectedRows
                    })
                });


            })
        })
    })
    //  })

}

exports.getProcesos = (req, res) => {
    Administrador.getProcesos((result) => {
        res.json(result)
    })
}

exports.setVoucherDePago = (req, res) => {
    const {
        proceso,
        fecha_reg,
        dni,
        nombre,
        monto: pago1,
        codigo,
        idusu,
        signup
    } = req.body
    const modalidad = "n";
    const carrera = 1;
    const sede_e = "n";
    const pago2 = null;
    const preparatoria = "n";
    const anio = "n";
    const turno = "n";
    const data = {
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
    }
    Administrador.setVoucherDePago(data, (result) => {
        res.json(result)
    })
}

exports.crearProceso = (req, res) => {
    // Recibimos los datos
    const {
        nombre,
        estado,
        fecha
    } = req.body
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