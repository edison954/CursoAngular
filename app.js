"use strict";
(function () {
    function getEdad() {
        return 100 + 100 + 300;
    }
    var nombre = "Edison";
    var edad = 36;
    var apellido = "Plaza";
    // const salida = nombre + apellido + edad;
    // const salida = nombre + " " + apellido + " ( " + edad + " ) ";
    // const salida = `${nombre} \n${apellido} \n(${edad})`;
    var salida = "\n  " + nombre + "\n  " + apellido + "\n  (" + (edad + getEdad()) + ")";
    console.log(salida);
})();
