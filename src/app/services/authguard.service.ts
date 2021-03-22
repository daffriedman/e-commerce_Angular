import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {
loggedStatus = false
  constructor() { }
  isUserLoggedIn(){
    return this.loggedStatus;
  }

  setUserLogin(){
this.loggedStatus = true;
  }
}
