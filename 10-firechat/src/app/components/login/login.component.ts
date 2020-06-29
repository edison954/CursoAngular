import { ChatService } from './../../providers/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(
    public _cs: ChatService
  ) { }

  ngOnInit() {
  }

  ingresar(proveedor: string) {
    console.log(proveedor);
    this._cs.login(proveedor);
  }

}
