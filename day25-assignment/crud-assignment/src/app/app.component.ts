import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { iSchoolUserService } from './user.services';

@Component({
  selector: 'app-root',
  template: `
    <h1>Users List</h1>
    <hr />
    <!-- <div class="container">

      <hr />
      <ul>
        <li>User Name : {{ newUserData.username }}</li>
        <li>User Mail : {{ newUserData.usermail }}</li>
        <li>User City : {{ newUserData.usercity }}</li>
      </ul>
      <hr />

      <ul>
        <li>User Name : {{ newUserData.username }}</li>
        <li>User Mail : {{ newUserData.usermail }}</li>
        <li>User City : {{ newUserData.usercity }}</li>
      </ul>
      <hr />
    </div> -->
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'step-1';


  constructor(private us: iSchoolUserService) {}
  reload() {
  }
  ngOnInit() {
    this.reload();
  }



}
