import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey = '866baac4f7b722ab78622911fe683e61';
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


}



