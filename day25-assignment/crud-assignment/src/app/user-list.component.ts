import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';
import { iSchoolUserService } from './user.services';

@Component({
  selector: 'app-list',
  template: `
    <div class="container">
      <a [routerLink]="['/add']" style="text-decoration: none;"
        ><h2>Add User</h2></a
      >
      <div>
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>SL #</th>
              <th>User Name</th>
              <th>User Mail</th>
              <th>User City</th>
              <th>Edit User Info</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            <!-- ngfor has many properties and index,first,last,odd,even, and etc are part of it -->
            <tr *ngFor="let user of userdata; index as idx">
              <td>{{ idx + 1 }}</td>
              <td>{{ user.username }}</td>
              <td>{{ user.usermail }}</td>
              <td>{{ user.usercity }}</td>
              <td>
                <button (click)="editUser(user)" class="btn btn-warning">
                  Edit
                </button>
              </td>
              <td>
                <button (click)="deleteUser(user)" class="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
})
export class userListComponent {
  userdata: any = [];
  refresh(): void {
    window.location.reload();
  }
  constructor(private us: iSchoolUserService, private router: Router) {}
  ngOnInit(): void {
    this.us.getUser().subscribe((res) => {
      this.userdata = res;
    });
  }
  editUser(user: any) {
    this.router.navigate(['/edit', user._id]);
  }
  deleteUser(user: any) {
    this.us.deleteUser(user._id).subscribe((res) => {
      console.log(res);
    });
    this.refresh();
  }
}
