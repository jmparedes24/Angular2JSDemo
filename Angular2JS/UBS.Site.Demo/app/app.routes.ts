import { Routes, RouterModule } from '@angular/router';
import { DataListComponent } from './data-list.component';

// Route config let's you map routes to components
const routes: Routes = [
  // map '/allData' to the people list component
  {
    path: 'allData',
    component: DataListComponent,
  },
  // map '/' to '/allData' as our default route
  {
    path: '',
    redirectTo: '/allData',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);
