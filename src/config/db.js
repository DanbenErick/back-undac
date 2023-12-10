// Importamos el módulo mysql
const mysql = require("mysql");

// Creamos la conexión
const dbConfig  = {
  host: "localhost",
  port: 3306,
  database: "admision_cepre",
  user: "root_test",
  password: "test",
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    throw err;
  }
  console.log('Conexión a la base de datos MySQL establecida');
});

// Cerrar la conexión de la base de datos antes de salir de la aplicación
process.on('SIGINT', () => {
  connection.end(() => {
    console.log('Conexión a la base de datos MySQL cerrada debido a la terminación de la aplicación');
    process.exit(0);
  });
});

module.exports = connection;

// Conectamos a la base de datos
// connection.connect((err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   console.log("Conexión a la base de datos establecida");
// });