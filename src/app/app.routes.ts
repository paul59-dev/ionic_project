import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'loader',
    loadComponent: () => import('./pages/loader/loader.page').then( m => m.LoaderPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'pickup-call',
    loadComponent: () => import('./pages/pickup-call/pickup-call.page').then( m => m.PickupCallPage)
  },
  {
    path: 'pickup-calls',
    loadComponent: () => import('./pages/pickup-calls/pickup-calls.page').then( m => m.PickupCallsPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
];
