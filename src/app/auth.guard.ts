import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthguardService } from '../app/services/authguard.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authServ:AuthguardService, private router: Router){}
  canActivate(){
    if(this.authServ.isUserLoggedIn()) {
      return true;
    }else{
      this.router.navigateByUrl('/home');
      return false;
    }
  }
  
}
