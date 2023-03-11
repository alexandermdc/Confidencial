/*import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Usuario } from './usuario';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  
  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService){}
  
  fazerLogin(){
    this.authService.fazerLogin(this.usuario);
    }
}*/
import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  fazerLogin(){
    //console.log(this.usuario);
    this.authService.fazerLogin(this.usuario);
  }

}