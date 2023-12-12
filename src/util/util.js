const fs = require('fs')
const path = require('path')
const utilitarios = {
    generarNumero4y5: (numero_requerido) => {
      let final = "";
      let suma = 0;
      for (let i = 0; i < numero_requerido; i++) {
        let numero = Math.floor(Math.random() * 10);
        if (numero < 6) numero = 4;
        else if (numero < 11) numero = 5;
        suma += numero;
        final += numero.toString();
      }
      return {final, suma}
    },
    getDiscapacidades: () => {
      const ruta = path.join(__dirname, '../json/discapacidades.json');
      console.log(ruta);
      path.join(__dirname, 'json/discapacidades.json')
      fs.readFile(ruta, 'utf8', (error, data) => {
        if (error) {
            console.error('Error al leer el archivo:', error);
            return;
        }
        console.log("2", data)
        return data
      });

    }
  };
  

module.exports = utilitarios