import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class SignedGuard implements CanActivate {

  constructor(private service: UserService, private router: Router) { }

  // Checking the isLoggedIn status in the UserService 
  canActivate() {
    if (this.service.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
      return false;
    }

    return true;
  }

}
