import { Marcador } from './../../classes/marcador.class';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];

  lat = 51.678418;
  lng = 7.809007;

  constructor(
    private snackBar: MatSnackBar
  ) {
    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
  }

  ngOnInit() {
  }

  agregarMarcador(evento) {
    console.log(evento);
    const coords: { lat: number, lng: number } = evento.coords;

    const nuevoMarcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
    this.snackBar.open('Marcador agregado', 'Cerrar', { duration: 1000 });
  }

  borrarMarcador(i: number) {
    console.log(i);
    this.marcadores.splice(i, 1);
    this.guardarStorage();
    this.snackBar.open('Marcador borrado', 'Cerrar', { duration: 1000 });
  }


  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }


}
