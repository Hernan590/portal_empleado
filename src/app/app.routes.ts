import { Routes } from '@angular/router';
// import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./pages/login/login.component')},
  { path: 'empleado', loadComponent: () => import('./pages/empleado/empleado.component'),
    children: [
      { path: 'Perfil', title: 'Perfil', loadComponent: () => import('./pages/mis_datos/mis_datos.component')},
      { path: 'Desprendibles', title: 'Desprendibles', loadComponent: () => import('./pages/desprendibles/desprendibles.component')},
      { path: 'Contraseña', title: 'Contraseña', loadComponent: () => import('./pages/configuracion/configuracion.component')}
    ]
  },
  { path: '', redirectTo: '/login',pathMatch: 'full'}
]