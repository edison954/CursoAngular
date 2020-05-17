"use strict";
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
        constructor(equipo, nombre, nombreReal, puedePelear = true, peleasGanadas = 0) {
            this.equipo = equipo;
            this.nombre = nombre;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    //const antman: Avanger = new Avanger();
    const antman = new Avanger("Antman", "Capi");
    console.log(antman);
})();
