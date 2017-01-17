import { Component } from '@angular/core';
import { DataService } from './data.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  template: `
  <h1> {{title}} </h1>
  <router-outlet>
  `,
  /* The RouterOutlet is a directive from the router library
  that marks the spot in the template where the router should display the views for that outlet. */
  providers: [DataService]
})
export class AppComponent {
  title: string = 'Get All Data!';
}
