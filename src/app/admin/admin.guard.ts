import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
    console.log(userDetails);

    if (
      userDetails && // 👈 null and undefined check
      Object.keys(userDetails).length !== 0 &&
      userDetails.constructor === Object
    ) {
      console.log('if');

      return true;
    } else {
      console.log('else');
      return this.router.navigate(['login']);
    }
  }
}
