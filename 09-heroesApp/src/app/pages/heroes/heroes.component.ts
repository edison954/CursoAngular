import { HeroreModel } from './../../models/heroe.model';
import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroreModel[] = [];
  cargando = false;

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.cargando = true;
    this.heroesService.getHeores()
      .subscribe(resp => {
        this.heroes = resp;
        this.cargando = false;
      });

  }

  borrarHeroe(heroe: HeroreModel, i: number) {
    this.heroes.splice(i, 1);
    this.heroesService.borrarHerore(heroe.id).subscribe();
  }

}
