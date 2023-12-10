const Administrador = require('../models/estudianteModel')

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
        res.send("ok");
    })
}