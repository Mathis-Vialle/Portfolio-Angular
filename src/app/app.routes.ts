import { Routes } from '@angular/router';
import { LpProjectListComponent } from './Components/lp-project-list/lp-project-list.component';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/landing-page/landing-page.routes').then(
        (r) => r.landingPageRoutes
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact-page/landing-page.routes').then(
        (r) => r.landingPageRoutes
      ),
  },
  {
    path: 'test',
    component: LpProjectListComponent,
  },
  { path: '**', redirectTo: 'home' },
];
