import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey = '';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor(
    private http: HttpClient,
    private jsonp: HttpClientJsonpModule

  ) { }

  getPopulares() {
    let url = `${this.urlMoviedb}/discover/moview?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, 'callback').pipe(
      map(res => res.toString())
    );
  }

  buscarPelicula(texto: string) {

    let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .map(res => res.json());
  }




}



