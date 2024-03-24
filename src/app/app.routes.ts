import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./client-list/client-list.component')
  },

  {
    path: 'create',
    loadComponent: () => import('./client-form/client-form.component')
  }
];
