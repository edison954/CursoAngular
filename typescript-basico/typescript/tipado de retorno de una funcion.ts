(() => {
  const sumar = (a: number, b: number): number => a + b;
  const nombre = (): string => "Hola Edison";

  const obtenerSalario = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      resolve("Edison");
    });
  };

  obtenerSalario().then((a) => console.log(a.toUpperCase()));
})();
