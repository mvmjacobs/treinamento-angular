import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

	constructor(
		private router: Router
	) { }

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		// console.log(this.router.url);
		if (this.router.url === '/' && !localStorage.getItem('user')) {
			this.router.navigate(['login']);
			return false;
		}
		return true;
	}

	canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
		console.log('canLoad1');
		return true;
	}
}
