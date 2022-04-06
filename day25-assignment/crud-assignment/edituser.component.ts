import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "./user.model";
import { ISchoolUserService } from "./user.services";
@Component({
    template: `
    <div>
        <h2>Update User</h2>
        <form name="updateUserForm" #updateUserForm="ngForm">
        <div class="mb-3">
          <label for="edit_username" class="form-label">Update User Name</label>
          <input name="uname" #edit_uname="ngModel" [(ngModel)]="userToUpdate.username" class="form-control" id="edit_username">
        </div>
        <div class="mb-3">
          <label for="edit_usermail" class="form-label">Update User Mail</label>
          <input name="umail" #edit_umail="ngModel" [(ngModel)]="userToUpdate.usermail" class="form-control" id="edit_usermail">
        </div>
        <div class="mb-3">
          <label for="edit_usercity" class="form-label">Update User City</label>
          <input name="ucity" #edit_ucity="ngModel" [(ngModel)]="userToUpdate.usercity" class="form-control" id="edit_usercity">
        </div>
        <button (click)="updateUserInfo(userToUpdate._id)" [routerLink]="['']" type="submit" class="btn btn-primary">Update User</button>
      </form>
      </div>
    `
})
export class EditUserComponent {
    id:any;
    userdata:Array<User> = [
        {
          username : '',
          usermail : '',
          usercity : ''
        }
      ];
      newuserdata:User = {
        username : '',
        usermail : '',
        usercity : ''
      };
      userToUpdate = {
        username : '',
        usermail : '',
        usercity : '',
        _id : '',
      };
      constructor( private us:ISchoolUserService,private ar:ActivatedRoute ){}
    reload(){
      this.us.getUsers().subscribe((res:any) => this.userdata = res);
    }
    ngOnInit(){
      this.reload();
      this.us.getUserToEdit(this.ar.snapshot.queryParams['id']).subscribe((res:any)=>{
        this.userToUpdate = res;
      })
    }

    updateUserInfo(userid:any){
      this.us.postUserToEdit(userid,this.userToUpdate).subscribe((res:any)=>{
        console.log(res);
        this.reload();
        this.userToUpdate = {
          username : '',
          usermail : '',
          usercity : '',
          _id : '',
        };
        })
      }


}
