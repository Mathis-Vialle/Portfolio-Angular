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
      import('./pages/contact-page/contact-page.routes').then(
        (r) => r.contactPageRoutes
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about-page/about-page.routes').then(
        (r) => r.aboutPageRoutes
      ),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./pages/portfolio-page/portfolio-page.routes').then(
        (r) => r.portfolioPageRoutes
      ),
  },
  {
    path: 'test',
    component: LpProjectListComponent,
  },
  { path: '**', redirectTo: 'home' },
];
