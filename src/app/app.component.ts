import { Component, OnInit } from '@angular/core';
import { AuthguardService } from '../app/services/authguard.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ecommerce';
  url;
  constructor(public authGServ: AuthguardService, private router: Router) {}
  ngOnInit(): void {}

  logout() {
    if (this.authGServ.loggedStatus === false) {
      return;
    } else {
      this.authGServ.loggedStatus = false;
      alert(
        'You have been Logged Out and your access to the purchasing method will be denied'
      );
      sessionStorage.clear();
      this.router.navigateByUrl('/home');
    }
  }

}
