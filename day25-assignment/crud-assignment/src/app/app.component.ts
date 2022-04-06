import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `
  <ul>
    <li> <a [routerLink]="['']" >User List</a> </li>
    <li> <a [routerLink]="['adduser']" >Add User</a> </li>
  </ul>
  <router-outlet></router-outlet>

  `
})
export class AppComponent {
  title = 'steps';

}
