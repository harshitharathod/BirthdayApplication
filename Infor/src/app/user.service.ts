import { Injectable } from '@angular/core';
import {User} from './user';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl:string="http://localhost:9001/api";
  private user = new User();
  constructor(private httpclient : HttpClient,private router:Router) { }

  getUsers()
  {
    return  this.httpclient.get(`${this.baseUrl + '/getusers'}`)
  }
  getUser(id:Number)
  {
    return this.httpclient.get(`${this.baseUrl + '/getuser/id'}`)
  }
  createUser(user : User)
  {
    return this.httpclient.post(`${this.baseUrl + '/postuser'}`,user)
  }
  setter(user:User){
    this.user=user;
  }

 getter(){
   return this.user;
 }
  
}
