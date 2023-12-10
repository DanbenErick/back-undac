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
  };

module.exports = utilitarios