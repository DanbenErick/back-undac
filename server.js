const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const app = express();
const PORT = process.env.PORT || 8000;
// Archivos Estaticos



// const upload = multer({
//     storage: opcionesMulter
// });

app.use(express.static(path.join(__dirname, 'public')));
app.use('/jquery', express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
})
// app.get('/canciones', function(req, res) {
//     fs.readFile(path.join(__dirname, 'canciones.json'), 'utf8', function(erro, canciones) {
//         if(erro) throw erro;
//         res.json(JSON.parse(canciones));
//     })
// })
// app.get('/canciones/:nombre', function(req, res) {
//     let cancion = path.join(__dirname, 'canciones', req.params.nombre);
//     console.log(cancion);
//     mediaserver.pipe(req, res, cancion);
// })



// app.post('/canciones', upload.single('cancion'), function(req, res) {
//     let archivoCanciones = path.join(__dirname, 'canciones.json');
//     let name = req.file.originalname;
//     fs.readFile( archivoCanciones, 'utf8', function(err, archivo) {
//         if(err) throw err;
//         let canciones = JSON.parse(archivo);
//         canciones.push({nombre: name})
//         fs.writeFile( archivoCanciones, JSON.stringify(canciones), function(err) {
//             if(err) throw err;
//             res.sendFile(path.join(__dirname, 'index.html'))
//         })
//     })
// });

app.listen(PORT, function() {
    console.log(`Esta el puerto ${PORT}`)
})