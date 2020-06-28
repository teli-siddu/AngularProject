import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JwtService } from '../services/jwt.service';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  private isAuthenticated: boolean;
  constructor(private autheticationService: AuthenticationService, private router: Router) {
    // alert();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // alert();

    this.autheticationService.isAuthenticated().subscribe(result => {
      this.isAuthenticated = result
    });
    if (this.isAuthenticated == false) {
      this.router.navigate(["/login"])
      return false;
    }
    return true;
  }
}
