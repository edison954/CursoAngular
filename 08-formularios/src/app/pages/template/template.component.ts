import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Edison',
    apellido: 'Plaza',
    correo: 'edison954@gmail.com'
  };

  constructor() { }

  ngOnInit() {
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
