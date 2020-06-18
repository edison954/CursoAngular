import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html'
})
export class ClasesComponent implements OnInit {

  alerta: string = 'alert-primary';
  propiedades: Object = {
    danger: false
  };

  constructor() { }

  ngOnInit() {
  }

}
