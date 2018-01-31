import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Router, CanActivate } from '@angular/router';



@Injectable()
export class AuthGuardService implements CanActivate {

  constructor( private router: Router, private _ls: LoginService) { }

  canActivate() {
          if ( this._ls.isLoggedIn() ) {
              return true;
          }
          this.router.navigate(['/profile']);
          return false;
      }


}
