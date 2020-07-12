import { AuthService } from './../../services/auth.service';
import { UsuarioModel } from './../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    if (form.invalid) { return; }
    console.log('imprimir si el formulario es valido');
    console.log(form.value);
    console.log(this.usuario);

    this.auth.login(this.usuario)
      .subscribe(resp => {
        console.log(resp);
      }, (err) => {
        console.log(err.error.error.message);
      });

  }

}
