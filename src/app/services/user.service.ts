import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isUserLoggedIn$ = new BehaviorSubject(false);

  constructor(private router: Router) {
    this.isUserLoggedIn$.next(this.isLoggedIn());
  }

  // Function to check the status of the localStorage of loginStatus == true
  isLoggedIn(): boolean {
    const status = (localStorage.getItem('loginStatus') == 'true')
    return status;
  }

  // Logout function to reset the loginStatus and set loginStatus to default false
  logout() {
    this.isUserLoggedIn$.next(false)
    localStorage.removeItem('loginStatus')
    this.router.navigate([''])
  }
}
