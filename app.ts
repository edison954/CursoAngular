(function () {
  function getEdad() {
    return 100 + 100 + 300;
  }

  const nombre = "Edison";
  const edad = 36;
  const apellido = "Plaza";

  // const salida = nombre + apellido + edad;
  // const salida = nombre + " " + apellido + " ( " + edad + " ) ";
  // const salida = `${nombre} \n${apellido} \n(${edad})`;
  const salida = `
  ${nombre}
  ${apellido}
  (${edad + getEdad()})`;

  console.log(salida);
})();
