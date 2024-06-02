import {inject, Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivateFn
} from '@angular/router';
import {Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import {isPlatformBrowser} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean | UrlTree> {
  if (isPlatformBrowser(this.platformId)) {
    return this.authService.isLoggedIn().pipe(
      map(isLoggedIn => {
        if (isLoggedIn) {
          console.log("Авторизирован");
          return true;
        } else {
          return this.router.createUrlTree(['/registration']);
        }
      })
    );
  } else {

    return of(false);
  }
}


}
export const isLoggedGuardFn: CanActivateFn =(route,state)=>{
  return inject(AuthService).isLoggedIn();

};
