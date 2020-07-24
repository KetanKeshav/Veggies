import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    let role = 'superadmin'// get from jwt; admin, 'superadmin';
    if (role != expectedRole) {
      this.router.navigate(['products']);
      return false;
    } else if (role != expectedRole) {
        this.router.navigate(['products']);
        return false;
    }
    return true;
  }
}