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
    let url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;

    return this.http.jsonp(url, 'callback').pipe(
      map(res => res.toString())
    );
  }

  getPopularesNinos() {
    let url = `${this.urlMoviedb}/discover/moview?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.http.get(url).pipe(
      map((res: any) => {
        console.log(res);
        return res.results;
      })
    );

  }


  // buscarPelicula(texto: string) {

  //   let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

  //   return this.http.jsonp(url, 'callback').pipe(
  //     map(res => res.toString())
  //   );

  // }

  getCartelera() {
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    // let desdeStr = `${desde.getFullYear()}-${desde.getMonth() + 1}-${desde.getDay()}`;
    //let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth() + 1}-${hasta.getDay() + 1}`;
    let desdeStr = `2020-07-01`;
    let hastaStr = `2020-07-30`;

    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apiKey}&language=es`;

    return this.http.get(url).pipe(
      map((res: any) => {
        console.log(res);
        return res.results;
      })
    );
  }




}



