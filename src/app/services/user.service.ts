import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isUserLoggedIn$ = new BehaviorSubject(false);

  constructor(private router: Router) {
    this.isUserLoggedIn$.next(localStorage.getItem('loginStatus') == 'true')
  }

  isLoggedIn(): boolean {
    const status = (localStorage.getItem('loginStatus') == 'true')
    return status;
  }

  logout() {
    this.isUserLoggedIn$.next(false)
    localStorage.removeItem('loginStatus')
    this.router.navigate([''])
  }
}
