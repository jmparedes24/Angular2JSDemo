import { Component } from '@angular/core';
import { DataService } from './data.service';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  template: `
  <h1> {{title}} </h1>
  <router-outlet>
  `,
  providers: [DataService]
})
export class AppComponent {
  title:string = 'Get All Data!';
}
