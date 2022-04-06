import { Component } from "@angular/core";
import { User } from "./user.model";
import { ISchoolUserService } from "./user.services";

@Component({
    template: `
    <div>
        <h2>Users List</h2>
        <table class="table table-striped table-bordered table-responsive">
        <thead>
          <tr>
              <th> Sl # </th>
              <th> User Name </th>
              <th> User Mail </th>
              <th> User City </th>
              <th> Select User </th>
              <th> Delete User </th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let user of userdata; index as idx; first as fst; last as lst; odd as od; even as ev">
            <td>{{ idx + 1 }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.usermail }}</td>
            <td>{{ user.usercity }}</td>
            <td><button class='btn btn-warning' (click)='editUser(user)'>Select</button></td>
            <td><button class='btn btn-danger' (click)='deleteUser(user)'>Delete</button></td>
          </tr>
        </tbody>
      </table>
      <button class='btn btn-warning' [routerLink]="['/edituser']" [queryParams]  = "{id:userToUpdate._id}"> Edit {{ userToUpdate.username}} </button>
      </div>
      <router-outlet></router-outlet>

    `
})
export class UserListComponent {
    userdata:Array<User> = [
        {
          username : 'Batman',
          usermail : 'bruce@wayne.com',
          usercity : 'Gotham'
        }
      ];
    userToUpdate = {
        username : '',
        usermail : '',
        usercity : '',
        _id : '',
    };

    constructor(private us:ISchoolUserService){}

    reload(){
        this.us.getUsers().subscribe((res:any)=> this.userdata = res)
    }
    ngOnInit(){
        this.reload();
    }

    editUser(user:any){
        this.us.getUserToEdit(user._id).subscribe((res:any) => {
            this.userToUpdate = res;
        })
      }

    deleteUser(user:any){
        this.us.deleteUser(user._id).subscribe((res:any) => {
          console.log(res);
          this.reload();
        })
      }
}
