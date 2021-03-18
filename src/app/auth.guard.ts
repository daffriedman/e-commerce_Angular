import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthguardService } from './authguard.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authServ:AuthguardService){}
  canActivate(){
    if(this.authServ.isUserLoggedIn()) {
      return true;
    }else{

      return false;
    }
  }
  
}
