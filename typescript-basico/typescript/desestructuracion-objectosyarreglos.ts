(() => {
  const avanger = {
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

  const extraer = ({ nombre, clave, poder }: any) => {
    //const { nombre, clave, poder } = avanger;

    console.log(nombre);
    console.log(clave);
    console.log(poder);
  };

  //extraer(avanger);

  //Desestructuracion de arreglos
  const avangers: string[] = ["Thor", "Ironmnan", "Spiderman"];

  console.log(avangers[0]);
  console.log(avangers[1]);
  console.log(avangers[2]);

  const [thor, aironman, spiderman] = avangers;

  console.log(thor);
  console.log(aironman);
  console.log(spiderman);

  //--- con commas indicar que no mapee las posiciones que no necesitamos
  const [, , spiderman1] = avangers;

  console.log(spiderman1);

  //---con funcion
  // const extraerArr = (avangers: string[]) => {
  //   console.log(avangers[0]);
  //   console.log(avangers[1]);
  //   console.log(avangers[2]);
  // };

  // extraerArr(avangers);

  const extraerArr = ([thor, ironman, spiderman]: string[]) => {
    console.log(thor);
    console.log(ironman);
    console.log(spiderman);
  };

  extraerArr(avangers);
})();
