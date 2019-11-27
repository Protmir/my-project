import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginGuard} from './login/login.guard';



const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
