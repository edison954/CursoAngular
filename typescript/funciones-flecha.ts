(function () {
  const miFuncion = function (a: string) {
    return a.toUpperCase();
  };
  // function funcion2(a: string) {
  //   return a;
  // }
  const miFuncionF = (a: string) => {
    return a.toUpperCase();
  };

  const miFuncionF1 = (a: string) => a.toUpperCase();

  console.log(miFuncion("normal"));
  console.log(miFuncionF("flecha"));
  console.log(miFuncionF1("flecha1"));

  const sumarN = function (a: number, b: number) {
    return a + b;
  };

  const sumarF = (a: number, b: number) => a + b;

  console.log(sumarN(8, 7));
  console.log(sumarF(8, 7));

  // const hulk = {
  //   nombre: "hulk",
  //   smash() {
  //     console.log(`${this.nombre} smash!!!`);
  //   },
  // };

  // hulk.smash();

  const hulk = {
    nombre: "hulk",
    smash() {
      setTimeout(() => {
        console.log(`${this.nombre} smash!!!`);
      }, 1000);
    },
  };

  hulk.smash();
})();
