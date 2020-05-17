(function () {
  function activar(
    quien: string,
    momento?: string,
    objeto: string = "batiseñal"
  ) {
    if (momento) {
      console.log(`${quien} activó la ${objeto} en la ${momento}`);
    } else {
      console.log(`${quien} activó la ${objeto}.`);
    }
  }

  // activar("Gordon", "batiseñal", "tarde");
  activar("Gordon", "tarde");
})();
