import { AuthService } from './login/auth.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Confidencial';

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  mostrarMenu: boolean = false;

  constructor(private authService: AuthService) {}

  ngOninit(){
    this.authService.mostrarMenuService.subscribe( mostrar => this.mostrarMenu = mostrar);
  }
}
