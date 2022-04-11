import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './user.model';
import { iSchoolUserService } from './user.services';

@Component({
  selector: 'app-edit',
  template: `
    <div class="container">
      <a [routerLink]="['']" style="text-decoration: none;"><h4>Back</h4></a>
      <div>
        <h1>Update User</h1>
        <form name="updateUserForm" #updateUserForm="ngForm">
          <div class="mb-3">
            <label for="edit_username" class="form-label"
              >Update User Name</label
            >
            <input
              #uname="ngModel"
              [(ngModel)]="updatesUserData.username"
              type="email"
              class="form-control"
              id="edit_username"
              name="uname"
            />
          </div>
          <div class="mb-3">
            <label for="edit_usermail" class="form-label">User email</label>
            <input
              #umail="ngModel"
              [(ngModel)]="updatesUserData.usermail"
              type="email"
              class="form-control"
              id="edit_usermail"
              name="umail"
            />
          </div>
          <div class="mb-3">
            <label for="edit_usercity" class="form-label">User City</label>
            <input
              #ucity="ngModel"
              [(ngModel)]="updatesUserData.usercity"
              type="email"
              class="form-control"
              id="edit_usercity"
              name="ucity"
            />
          </div>
          <button
            (click)="updateUserInfo(updatesUserData._id)"
            type="submit"
            class="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  `,
})
export class editUserComponent {
  updatesUserData: any = {
    username: '',
    usermail: '',
    usercity: '',
    _id: '',
  };

  constructor(
    private us: iSchoolUserService,
    private ar: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    // this.updatesUserData = this.ar.snapshot.params['uid'];
    this.us
      .getUserToEdit(this.ar.snapshot.params['uid'])
      .subscribe((res: any) => {
        this.updatesUserData = res;
      });
    // console.log(this.updatesUserData);
  }
  updateUserInfo(userid: any) {
    console.log(this.updatesUserData);
    this.us
      .postUserToEdit(userid, this.updatesUserData)
      .subscribe((res: any) => {
        this.updatesUserData = {
          username: '',
          usermail: '',
          usercity: '',
          _id: '',
        };
        this.router.navigate(['']);
      });
  }
}
