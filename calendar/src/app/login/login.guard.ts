import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from './services/login.service';

export class LoginGuard implements CanActivate {

  // public myService: LoginService;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | boolean {
    return true;
  }
}


