import { HeroesService } from './../../services/heroes.service';
import { HeroreModel } from './../../models/heroe.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: HeroreModel = new HeroreModel();

  constructor(
    private heroesService: HeroesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'nuevo') {
      this.heroesService.getHeroe(id)
        .subscribe((resp: HeroreModel) => {
          this.heroe = resp;
          this.heroe.id = id;
        });
    }
  }

  guardar(form: NgForm) {

    if (form.invalid) {
      console.log('formulario no valido');
      return;
    }

    // Swal.fire({
    //   title: 'Espere',
    //   text: 'Guardando informacion',
    //   icon: 'info',
    //   allowOutsideClick: false
    // });
    // Swal.showLoading();
    console.log('guardadndo ingo');

    let peticion: Observable<any>;

    if (this.heroe.id) {
      peticion = this.heroesService.actualizarHeroe(this.heroe);
    } else {
      peticion = this.heroesService.crearHeroe(this.heroe);
    }

    peticion.subscribe(resp => {
      console.log('el registro se actualizo correctamente');
      // Swal.fire({
      //   title: this.heroe.nombre,
      //   text: 'Se actualizo correctamente'
      //   icon: 'success'
      // });
    });

  }


}
