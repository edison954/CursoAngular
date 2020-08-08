import { Game } from './../../interfaces/interfaces';
import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = [];

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit() {

    this.gameService.getNominados()
      .subscribe( juegos => {
        console.log(juegos);
        this.juegos = juegos;
      });

  }

  votarJuego( juego: Game ) {
    // console.log(juego);
    this.gameService.votarJuego( juego.id )
      .subscribe( (resp: { ok: boolean, mensaje: string}) => {
        if ( resp.ok ) {
            Swal.fire('Gracias', resp.mensaje, 'success');
        } else {
          Swal.fire('Oops', resp.mensaje, 'error');
        }
        console.log(resp);
      });
  }

}
