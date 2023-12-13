const Administrador = require('../models/administradorModel')

exports.setVoucher = (req, res) => {
    const { tipoVoucher ,fecha ,nombreCompleto ,dni ,monto ,codigo } = req.body
    const data = [codigo, fecha, dni, nombreCompleto, tipoVoucher, monto, 'si', '67']
    Administrador.guardarVoucher(data ,result => {
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

exports.getProcesos = (req, res) => {
    Administrador.getProcesos((result) => {
        res.json(result)
    })
}

exports.setVoucherDePago = (req, res) => {
    const { proceso, fecha_reg, dni, nombre, monto: pago1, codigo, idusu, signup} = req.body
    const modalidad = "n";
    const carrera = 1;
    const sede_e = "n";
    const pago2 = null;
    const preparatoria = "n";
    const anio = "n";
    const turno = "n";
    const data = { proceso, fecha_reg, dni, nombre, pago1, codigo, idusu, signup, modalidad ,carrera ,sede_e ,pago2 ,preparatoria ,anio ,turno }
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