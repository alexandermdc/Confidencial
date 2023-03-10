/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  
  private usuarioAutenticado: boolean = false;
  
  mostrarMenuService = new EventEmitter<boolean>();
  
  constructor(private router: Router) {}

  fazerLogin(usuario: Usuario){

    if(usuario.nome === 'usuario@email.com' && 
    usuario.senha === '123456'){

      this.usuarioAutenticado = true;

      this.mostrarMenuService.emit(true);

      this.router.navigate(['/']);
      
    }else{
      this.usuarioAutenticado = false;
      this.mostrarMenuService.emit(false);
    }
  }
  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}

