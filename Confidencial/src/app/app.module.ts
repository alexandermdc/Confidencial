import { CadastroImoveisComponent } from './cadastro-imoveis/cadastro-imoveis.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditarCadastroComponent } from './editar-cadastro/editar-cadastro.component';
import { AuthGuard } from './guards/auth.guard';
//import { routing } from './app.routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';


import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AuthService } from './login/auth.service';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    LoginComponent,
    HomeComponent,
    CadastroComponent,
    EditarCadastroComponent,
    DashboardComponent,
    CadastroImoveisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
