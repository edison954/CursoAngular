import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('spotify service listo');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB9BAe9FJp0PZXQ5Wb8Uc8HxpUVGwnEZOrj93M3QqpWS8NFATUTTXPio0_ZlJtKBJ1r84TVWT16r2cKigk'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
      .pipe(map((data: any) => data.albums.items));
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB9BAe9FJp0PZXQ5Wb8Uc8HxpUVGwnEZOrj93M3QqpWS8NFATUTTXPio0_ZlJtKBJ1r84TVWT16r2cKigk'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=20`, { headers })
      .pipe(map((data: any) => data.artists.items));

  }

}
