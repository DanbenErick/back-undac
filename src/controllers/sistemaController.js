const sistemaModel = require("../models/sistemaModel.js");
const utilitarios = require("../util/util");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secretKey = "UNDAC";

exports.login = (req, res) => {
    const { username, password } = req.body;

    sistemaModel.findUser([username], async (result) => {
        if(!result.length) res.json({ error: 'No se encontro usuario' })
        console.log(password, result[0].clave)
        const passwordMatch = await bcrypt.compare(password, result[0].clave);
        if (!passwordMatch)
            return res.status(401).json({ error: "Contraseña incorrecta" });

        const token = jwt.sign(
            { userId: result.id, username: result.username },
            secretKey,
            
            { algorithm: 'HS256' ,expiresIn: "1h" }
        );
        console.log('Token generado', token)
        const fechaActual = new Date()
        res.json({ token, name: result[0].nombre, id: result[0].id, fecha_expiracion:  new Date(fechaActual.getTime() + 3600 * 1000).getTime() });
    })
};
exports.register = async (req, res) => {
    const { username, name, password } = req.body;
    const fechaActual = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = [name, username, hashedPassword, fechaActual, 'ADMIN'];

    sistemaModel.register(newUser, (result) => {
        // Generar token JWT para el nuevo usuario registrado
        const token = jwt.sign(
            { userId: "121212", username: newUser.username },
            secretKey,
            {
                expiresIn: "1h",
            }
        );
        console.log(result);
        // Enviar el token como respuesta
        res.json({ token, id: result.insertId, nombre: name });
    });
};

exports.authenticaToken = (req, res, next) => {
    const authHeader = req.header("Authorization");
    const token = authHeader.split(" ")[1].trim();
    console.log("Token que llego", token)
    if (!token) {
        return res.status(401).json({ error: "Acceso no autorizado" });
    }

    jwt.verify(token, secretKey, (err, user) => {
        console.log("error", err)
        console.log("user", user)
        if (err) {
            return res.status(403).json({ error: "Token no válido" });
        }
        req.user = user;
        next();
    });
};
