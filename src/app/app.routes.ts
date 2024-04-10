import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/landing-page/landing-page.routes').then(
        (r) => r.landingPageRoutes
      ),
  },
  { path: '**', redirectTo: 'home' },
];
