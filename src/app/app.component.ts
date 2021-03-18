import { Component } from '@angular/core';
import {AuthguardService} from './authguard.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ecommerce';
  url;
constructor(private authGServ:AuthguardService,private router:Router){

}
logout(){
  this.authGServ.loggedStatus = false;
  alert('You have been Logged Out and your access to the purchasing method will be denied')
  this.router.navigateByUrl('/home');
}

  add(title, url) {}
}
