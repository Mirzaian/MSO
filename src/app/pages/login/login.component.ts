import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  constructor(private router: Router, private userService: UserService, private ngZone: NgZone) { }

  ngOnInit() { }

  login() {
    if (this.email == "k.mirzaian@telekom.de" && this.password == "123456") {
      this.ngZone.run(() => { this.router.navigate(['dashboard']) })
      this.userService.isUserLoggedIn$.next(true)
      localStorage.setItem('loginStatus', 'true')
    }
    else {
      this
    }
  }
}
