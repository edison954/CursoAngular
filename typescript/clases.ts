(() => {
  //Clases
  // class Avanger {
  //   nombre: string;
  //   equipo: string;
  //   nombreReal?: string;
  //   puedePelear: boolean;
  //   peleasGanadas: number;

  //   constructor(nombre: string, equipo: string) {
  //     this.nombre = nombre;
  //     this.equipo = equipo;
  //   }
  // }

  class Avanger {
    // nombre: string;
    // equipo: string;
    // nombreReal?: string;
    // puedePelear: boolean;
    // peleasGanadas: number;

    constructor(
      public equipo: string,
      public nombre: string,
      public nombreReal?: string,
      public puedePelear: boolean = true,
      public peleasGanadas: number = 0
    ) {}
  }

  //const antman: Avanger = new Avanger();
  const antman = new Avanger("Antman", "Capi");
  console.log(antman);
})();
