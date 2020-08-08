import { Game } from './../interfaces/interfaces';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private juegos: Game[] =  [];

  constructor(
    private http: HttpClient
  ) { }

  getNominados() {

    if( this.juegos.length > 0) {
      // no tenemos juegos
      // esto para que la peticion solo se ejecute la primera vez
      // para retornar un observable (of)
      console.log('Desde cache');
      return of(this.juegos);
    } else {
      console.log('Desde internet');
      return this.http.get<Game[]>(`${ environment.url }/api/goty`)
        .pipe(
          tap (
            juegos => this.juegos = juegos
          )
        );
    }
  }


  votarJuego(id: string) {

    return this.http.post(`${ environment.url }/api/goty/${ id }`, {})
      .pipe(
        catchError( err => {
            // console.log('Error en la peticion');
            return of( err.error );
        })
      );

  }

}
