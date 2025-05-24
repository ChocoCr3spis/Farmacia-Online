import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const loginModule            = () => import('./components/login/login.modules').then(m => m.LoginModule);
const registerModule         = () => import('./components/register/register.modules').then(m => m.RegisterModule);
const homeModule         = () => import('./components/home/home.modules').then(m => m.HomeModule);


export const routes: Routes = [
//   { path: ''                  , canActivate: [authGuard], loadChildren: homeModule },
  { path: ''                  ,                           loadChildren: homeModule     },
  { path: 'login'             ,                           loadChildren: loginModule    },
  { path: 'register'          ,                           loadChildren: registerModule },
//   { path: 'home'              , canActivate: [authGuard], loadChildren: homeModule                                                                   },
  { path: 'home'              ,                           loadChildren: homeModule     },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }