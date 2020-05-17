"use strict";
(function () {
    var miFuncion = function (a) {
        return a.toUpperCase();
    };
    // function funcion2(a: string) {
    //   return a;
    // }
    var miFuncionF = function (a) {
        return a.toUpperCase();
    };
    var miFuncionF1 = function (a) { return a.toUpperCase(); };
    console.log(miFuncion("normal"));
    console.log(miFuncionF("flecha"));
    console.log(miFuncionF1("flecha1"));
    var sumarN = function (a, b) {
        return a + b;
    };
    var sumarF = function (a, b) { return a + b; };
    console.log(sumarN(8, 7));
    console.log(sumarF(8, 7));
    // const hulk = {
    //   nombre: "hulk",
    //   smash() {
    //     console.log(`${this.nombre} smash!!!`);
    //   },
    // };
    // hulk.smash();
    var hulk = {
        nombre: "hulk",
        smash: function () {
            var _this = this;
            setTimeout(function () {
                console.log(_this.nombre + " smash!!!");
            }, 1000);
        },
    };
    hulk.smash();
})();
