const fs = require('fs');

const generarJSONOfCSV = (archivo) => {
    const fs = require("fs");
    const datos = fs.readFileSync(archivo, "utf8").split("\n");
    const columnas = datos[0].split(";");
    let objetos = [];
  
    for (const linea of datos.slice(1)) {
      const valores = linea.split(";");
      const objeto = {};
  
      for (let i = 0; i < columnas.length; i++) {
        objeto[columnas[i]] = valores[i];
      }
  
      objetos.push(objeto);
    }
    return objetos;
  }


console.log(generarJSONOfCSV('SOLAPA.csv'))


