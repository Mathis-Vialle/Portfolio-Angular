import { Routes } from '@angular/router';
import { PortfolioPageComponent } from './portfolio-page.component';
import { SingleProjectPageComponent } from '../../Components/single-project-page/single-project-page.component';

export const portfolioPageRoutes: Routes = [
  { path: 'project/:title', component: SingleProjectPageComponent },
  { path: '', component: PortfolioPageComponent },
];
