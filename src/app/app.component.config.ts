import { Routes } from '@angular/router';


export const APP_ROUTS: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.component.config').then(c => c.HOME_ROUTES),
  },
  {
    path: 'form',
    loadChildren: () => import('./pages/my-form/my-form.component.config').then(c => c.MY_FORM_ROUTES),
  },
];
