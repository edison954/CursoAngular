import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Edison',
    apellido: 'Plaza',
    correo: 'edison954@gmail.com',
    pais: 'CRI',
    genero: 'M'
  };

  paises: any[] = [];


  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.paisService.getPaises()
      .subscribe(paises => {
        console.log(paises);
        this.paises = paises;

        // insertar un nuevo elemento en la primera posicion
        this.paises.unshift({
          nombre: '[ Seleccione pais]',
          codigo: ''
        });
      });
  }

  guardar(forma: NgForm) {
    console.log(forma);
    if (forma.invalid) {
      Object.values(forma.controls).forEach(control => {
        console.log(control);
        control.markAsTouched();

      });
      return;
    }
    console.log(forma.value);
  }

}
