import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AddUserComponent } from './adduser.component';

import { AppComponent } from './app.component';
import { EditUserComponent } from './edituser.component';
import { UserListComponent } from './user-list.component';
import { ISchoolUserService } from './user.services';

@NgModule({
  declarations: [
    AppComponent, AddUserComponent, EditUserComponent, UserListComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,FormsModule , RouterModule.forRoot([
      {path : "" , component: UserListComponent},
      {path: "adduser" , component:AddUserComponent},
      {path : "edituser" , component: EditUserComponent},
    ])
  ],
  providers: [ISchoolUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
