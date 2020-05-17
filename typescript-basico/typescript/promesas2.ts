(() => {
  //Promesas
  const retirarDinero = (montoRetirar: number): Promise<number> => {
    let dineroActural = 1000;

    return new Promise((resolve, reject) => {
      if (montoRetirar > dineroActural) {
        reject("No hay suficientes fondos");
      } else {
        dineroActural -= montoRetirar;
        resolve(dineroActural);
      }
    });
  };

  // retirarDinero(1500)
  //   .then((montoActual) => console.log(`Me queda ${montoActual}`))
  //   .catch((err) => console.warn(err));

  retirarDinero(500)
    .then((montoActual) => console.log(`Me queda ${montoActual}`))
    .catch(console.warn);
})();
