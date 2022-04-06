import { Component } from "@angular/core";
import { User } from "./user.model";
import { ISchoolUserService } from "./user.services";
@Component({
    template: `
    <div>
        <h2>Add New User</h2>
        <form name="userForm" #userForm="ngForm">
        <div class="mb-3">
          <label for="username" class="form-label">User Name</label>
          <input name="uname" #uname="ngModel" [(ngModel)]="newuserdata.username" class="form-control" id="username">
        </div>
        <div class="mb-3">
          <label for="usermail" class="form-label">User Mail</label>
          <input name="umail" #umail="ngModel" [(ngModel)]="newuserdata.usermail" class="form-control" id="usermail">
        </div>
        <div class="mb-3">
          <label for="usercity" class="form-label">User City</label>
          <input name="ucity" #ucity="ngModel" [(ngModel)]="newuserdata.usercity" class="form-control" id="usercity">
        </div>
        <button (click)="addNewUser()" [routerLink]="['']" type="submit" class="btn btn-primary">Add User</button>
      </form>
      </div>
    `
})
export class AddUserComponent {
    userdata:Array<User> = [
        {
          username : 'Batman',
          usermail : 'bruce@wayne.com',
          usercity : 'Gotham'
        }
      ];
      newuserdata:User = {
        username : '',
        usermail : '',
        usercity : ''
      };

    constructor( private us:ISchoolUserService ){}
    reload(){
      this.us.getUsers().subscribe((res:any) => this.userdata = res);
    }
    ngOnInit(){
      this.reload();
    }
    addNewUser(){
      this.us.postUsers(this.newuserdata).subscribe((res:any) => {
        this.reload();
        console.log(res);
        this.newuserdata = {
          username : '',
          usermail : '',
          usercity : ''
        };
      })
    }
}
