"use strict";
(function () {
    var avanger = {
        nombre: "Steve",
        clave: "Capitán América",
        poder: "Droga",
    };
    // console.log(avanger.nombre);
    // console.log(avanger.clave);
    // console.log(avanger.poder);
    // Desestructuracion de objetos
    // const extraer = (avanger: any) => {
    //   const { nombre, clave, poder } = avanger;
    //   console.log(nombre);
    //   console.log(clave);
    //   console.log(poder);
    // };
    // extraer(avanger);
    var extraer = function (_a) {
        //const { nombre, clave, poder } = avanger;
        var nombre = _a.nombre, clave = _a.clave, poder = _a.poder;
        console.log(nombre);
        console.log(clave);
        console.log(poder);
    };
    //extraer(avanger);
    //Desestructuracion de arreglos
    var avangers = ["Thor", "Ironmnan", "Spiderman"];
    console.log(avangers[0]);
    console.log(avangers[1]);
    console.log(avangers[2]);
    var thor = avangers[0], aironman = avangers[1], spiderman = avangers[2];
    console.log(thor);
    console.log(aironman);
    console.log(spiderman);
    //--- con commas indicar que no mapee las posiciones que no necesitamos
    var spiderman1 = avangers[2];
    console.log(spiderman1);
    //---con funcion
    // const extraerArr = (avangers: string[]) => {
    //   console.log(avangers[0]);
    //   console.log(avangers[1]);
    //   console.log(avangers[2]);
    // };
    // extraerArr(avangers);
    var extraerArr = function (_a) {
        var thor = _a[0], ironman = _a[1], spiderman = _a[2];
        console.log(thor);
        console.log(ironman);
        console.log(spiderman);
    };
    extraerArr(avangers);
})();
