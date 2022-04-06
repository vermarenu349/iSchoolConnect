import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { User } from './user.model';
@Injectable()
export class ISchoolUserService{
    constructor(private http:HttpClient) {}

    //Read
    getUsers(){
        return this.http.get("http://localhost:5050/data");
    }

    //Create
    postUsers(user:User){
        return this.http.post("http://localhost:5050/add",user);
    }

    //Read  To Uopdate
    getUserToEdit(userid:any)
    {
        return this.http.get("http://localhost:5050/edit/"+userid);
    }

    //Update
    postUserToEdit(userid:any,user:User){
        return this.http.post("http://localhost:5050/edit/"+userid, user)
    }

    //Delete
    deleteUser(userid:any){
        return this.http.delete("http://localhost:5050/delete/"+userid);
    }
}
