(function () {
  let mensaje: string = "hola";
  let numero: number = 123;
  let booleano: boolean = true;
  let hoy: Date = new Date();
  let cualquiercosa: string | number | Date | boolean;
  cualquiercosa = mensaje;
  cualquiercosa = numero;
  cualquiercosa = booleano;
  cualquiercosa = hoy;

  let spriderman = {
    nombre: "Peter",
    edad: 30,
  };

  spriderman = {
    nombre: "Juan",
    edad: 15,
  };
})();
