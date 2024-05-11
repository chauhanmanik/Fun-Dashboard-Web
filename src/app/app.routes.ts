import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { ContentComponent } from './content/content.component';
// import { DimensionalCssScrollComponent } from './content/dimensional-css-scroll/dimensional-css-scroll.component';
// import { ContentComponent } from './content/content.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'content',
    loadChildren: () =>
      import('./content/content-routes').then((mod) => mod.CONTENT_ROUTES),
  },
];
