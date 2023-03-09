import { AuthService } from './auth.service';
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component } from '@angular/core';
import { Usuario } from './usuario';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  
  private usuario: Usuario = new Usuario();

  constructor(private AuthService: AuthService){}
  
  fazerLogin(){
      this.AuthService.fazerLogin(this.usuario);
    }
}
 