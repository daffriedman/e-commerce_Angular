import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import {UsersService} from '../users.service';
import {AuthguardService} from '../authguard.service';
import {User} from '../models/user.model';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
})
export class LoginformComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router:Router,public userServ:UsersService,
    private authGServ:AuthguardService) {}
userEmail ="test@test.com";
password = '123'
usersArray:User[];
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    
  }
  onSubmit() {
    if (this.loginForm.valid && this.loginForm.controls.email.value === this.userEmail && this.loginForm.controls.password.value === this.password) {
      alert('Welcome!!!');
      this.loginForm.reset();
      this.authGServ.loggedStatus =true;
      this.router.navigateByUrl('/home');


    } else {
      this.loginForm.reset();
      alert('The Login form is not valid');
      
      this.router.navigateByUrl('/login');
    }
  }
 
}
