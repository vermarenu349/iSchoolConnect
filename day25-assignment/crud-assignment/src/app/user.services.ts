import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
@Injectable()
export class iSchoolUserService {
  constructor(private http: HttpClient) {}
  //   READ
  getUser() {
    return this.http.get('http://localhost:5050/data');
  }
  // create
  postUser(user: User) {
    return this.http.post('http://localhost:5050/add', user);
  }
  // READ to UPDATE
  getUserToEdit(userid: any) {
    return this.http.get('http://localhost:5050/edit/' + userid);
  }
  // UPDATE
  postUserToEdit(userid: any, user: any) {
    return this.http.post('http://localhost:5050/edit/' + userid, user);
  }
  // Delete
  deleteUser(userid: any) {
    return this.http.delete('http://localhost:5050/delete/' + userid);
  }
}
