import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const isLoggedIn = !!localStorage.getItem('user_data');
    const isLoginRoute = route.routeConfig?.path === 'login';

    if (isLoggedIn && isLoginRoute) {
      // Redirect logged-in users away from login page
      return this.router.parseUrl('/');
    }

    if (!isLoggedIn && !isLoginRoute) {
      // Redirect unauthenticated users to login
      return this.router.parseUrl('/login');
    }

    // Allow navigation
    return true;
  }
}
