import { Injectable } from '@angular/core';
import {
  CanActivate,
  /* ActivatedRouteSnapshot, */
  Router,
  /* RouterStateSnapshot, */
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { urls } from 'src/app/lib/urls/urls';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    /* next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot */
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      /* console.log(next);
      console.log(state); */
    if (!sessionStorage.getItem('access_token')) {
      this.router.navigate([`${urls.login}`]);
      return false;
    } else {
      return true;
    }
  }
}
