/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private authService: AuthService,
    private router: Router) { }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  canActivate(route: ActivatedRouteSnapshot, 
              state: RouterStateSnapshot
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              ):Observable<boolean> | boolean {
      if(this.authService.usuarioEstaAutenticado()){
        return true;
      }
      this.router.navigate(['/login']);
      return false;
  }
}
