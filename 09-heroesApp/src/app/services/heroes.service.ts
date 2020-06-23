import { HeroreModel } from './../models/heroe.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://login-app-1e2ce.firebaseio.com';


  constructor(private http: HttpClient) { }

  crearHeroe(heroe: HeroreModel) {
    return this.http.post(`${this.url}/heroes.json`, heroe)
      .pipe(
        map((resp: any) => {
          heroe.id = resp.name;
          return heroe;
        })
      );
  }

  actualizarHeroe(heroe: HeroreModel) {

    const heroeTemp = {
      ...heroe
    };

    delete heroeTemp.id;

    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroeTemp);
  }

  borrarHerore(id: string) {
    return this.http.delete(`${this.url}/heroes/${id}.json`);
  }

  getHeroe(id: string) {
    return this.http.get(`${this.url}/heroes/${id}.json`);
  }

  getHeores() {
    return this.http.get(`${this.url}/heroes.json`)
      .pipe(
        map(this.crearArreglo),
        delay(0)
      );
  }

  private crearArreglo(heroesObj: object) {

    const heroes: HeroreModel[] = [];
    console.log(heroesObj);
    if (heroesObj === null) { return []; }

    Object.keys(heroesObj).forEach(key => {
      const heroe: HeroreModel = heroesObj[key];
      heroe.id = key;

      heroes.push(heroe);
    });

    return heroes;
  }

}
