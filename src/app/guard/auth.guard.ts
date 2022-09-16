import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service: UserService, private router: Router) { }

  canActivate() {
    if (this.service.isLoggedIn()) {
      return true;
    }
    else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
