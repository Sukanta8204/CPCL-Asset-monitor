import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './utils/gaurd.guard';

export const routes: Routes = [
  {
    path:'',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(m=>m.DashboardComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },

];
