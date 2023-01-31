import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup
  notification: boolean = false;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:[''],
      password:['']
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/user").subscribe(res => {
      const user = res.find((a:any) => {
        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
      });
      if(user){
        console.log("Login successful");
        this.loginForm.reset();
        this.userService.isUserLoggedIn$.next(true);
        localStorage.setItem('loginStatus', 'true');
        this.router.navigate(['dashboard']);
      } else {
        console.log("User not found");
        this.notification = true;
      }
     }, err=>{
        console.log("Something went wrong");
    })
  }

    // Logout function to reset the loginStatus and set loginStatus to default false
    logout() {
      this.userService.isUserLoggedIn$.next(false)
      localStorage.removeItem('loginStatus')
      this.router.navigate([''])
    }

}
