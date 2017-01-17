import { Routes, RouterModule } from '@angular/router';
import { DataListComponent } from './data-list.component';

// Route config let's you map routes to components
const routes: Routes = [
  // map '/Home' to the people list component
  {
    path: 'Home',
    component: DataListComponent,
  },
  // map '/' to '/Home' as our default route
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);
