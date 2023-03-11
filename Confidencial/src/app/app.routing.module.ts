import { DashboardComponent } from './dashboard/dashboard.component';
import { CadastroImoveisComponent } from './cadastro-imoveis/cadastro-imoveis.component';
import { EditarCadastroComponent } from './editar-cadastro/editar-cadastro.component';
import { AuthGuard } from './guards/auth.guard';
import { CadastroComponent } from './cadastro/cadastro.component';

/* eslint-disable @typescript-eslint/no-unused-vars */
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from "@angular/router"
import {NgModule} from '@angular/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const APP_ROUTES: Routes = [ 
    {path: 'login', component: LoginComponent},
    {path: '', component: HomeComponent, canActivate:[AuthGuard]},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'editarcadastro', component: EditarCadastroComponent, canActivate:[AuthGuard]},
    {path: 'cadastroimoveis', component: CadastroImoveisComponent, canActivate:[AuthGuard]},
    {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]}
];

//export const routing: ModuleWithProviders<T> = RouterModule.forRoot(APP_ROUTES);

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
}) 
export class AppRoutingModule{}