import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Notfound } from './pages/notfound/notfound';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'home', component: Home},
  { path: '**', component: Notfound }
];
