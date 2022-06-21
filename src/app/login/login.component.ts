import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  constructor(private router: Router, private userService:UserService ) {}

  ngOnInit() {
  }

  login(){
    console.log(this.email),
    console.log(this.password)
    if(this.email == "miniplan" && this.password == "123456")
    {
      this.router.navigate(['/index'])
      this.userService.isUserLoggedIn$.next(true)
      localStorage.setItem('loginStatus', 'true')
    }
    else {
    }
  }
}
