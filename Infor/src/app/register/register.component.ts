import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  value: Date;
  private user:User;
  
  constructor(private userservice:UserService,private router:Router){

  }

  register()
  {
    if(this.user.id==undefined)
    {
      this.userservice.createUser(this.user).subscribe((user)=>{
        this.router.navigate(['welcome/',this.user.username])
      console.log(user);
    
    },(error)=>{
    console.log(error);
    });
  }
  }
  cancel()
  {
    this.user.id=null;
    this.user.username="";
    this.user.email="";
    this.user.dateOfBirth=null;

  }
 ngOnInit()
 {
   this.user=this.userservice.getter();
 }
}