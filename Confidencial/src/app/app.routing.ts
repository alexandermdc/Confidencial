import { CadastroComponent } from './cadastro/cadastro.component';

/* eslint-disable @typescript-eslint/no-unused-vars */
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from "@angular/router"
import {NgModule } from '@angular/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const APP_ROUTES: Routes = [ 
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'cadastro', component: CadastroComponent}
];

//export const routing: ModuleWithProviders<T> = RouterModule.forRoot(APP_ROUTES);

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class routing{}