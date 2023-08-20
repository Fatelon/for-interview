import { Routes } from '@angular/router';


export const MY_FORM_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./my-form.component'),
  },
];
