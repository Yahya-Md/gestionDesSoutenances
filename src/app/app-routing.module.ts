import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AcceuilComponent} from './website/acceuil/acceuil.component';
import {NotFoundComponent} from './website/not-found/not-found.component';
import {LoginComponent} from './website/login/login.component';
import {InscriptionComponent} from './website/inscription/inscription.component';


const routes: Routes = [
  {
    path : '',
    redirectTo : 'acceuil',
    pathMatch : 'full'
  },
  {
    path : 'acceuil',
    component : AcceuilComponent
  },
  {
    path : 'inscription',
    component : InscriptionComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : '**',
    component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
