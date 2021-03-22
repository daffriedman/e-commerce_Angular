import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { AuthguardService } from '../../authentication/authguard.service';
import { User } from '../../models/user.model';
import { textChangeRangeIsUnchanged } from 'typescript';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
})
export class LoginformComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public userServ: UsersService,
    private authGServ: AuthguardService
  ) {}
  check: Boolean = false;
  userEmail;
  password;
  usersArray = [];
  ngOnInit(): void {
    this.getAllUsers();
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.userEmail = this.loginForm.controls.email.value;
    this.password = this.loginForm.controls.password.value;
    console.log(
      `the email input ${this.userEmail} the password input ${this.password}`
    );

    if (
      this.loginForm.valid &&
      this.inputUserCheck(this.userEmail, this.password)
    ) {
      this.loginForm.reset();
      this.authGServ.loggedStatus = true;
      this.router.navigateByUrl('/home');
      console.log('all good');
    } else {
      this.loginForm.reset();
      alert('The Login form is not valid');

      this.router.navigateByUrl('/login');
    }
  }

  inputUserCheck(email, password) {
    let check = false;
    for (let i = 0; i < this.usersArray.length; i++) {
      if (
        this.usersArray[i].email == email &&
        this.usersArray[i].password == password
      ) {
        this.setTheLoggedInUserNAme(this.usersArray[i].firstname)
        check = true;
        console.log(`in the inputusercheck func in the true userArray: email ${this.usersArray[i].email} password:${this.usersArray[i].password}
        the email : ${email} the password: ${password} the check boolean ${check}`);
      } else {
        console.log(`in the inputusercheck func in the else userArray: email ${this.usersArray[i].email} password:${this.usersArray[i].password}
          the email : ${email} the password: ${password} the check boolean ${check}`);
      }
    }
    return check;
  }
  getAllUsers() {
    this.userServ.getUsers().subscribe((userData: User[]) => {
      userData.map((data) => {
        this.usersArray.push(data);
      });
    });
    console.log('getAllUsers func ', this.usersArray);
  }

  setTheLoggedInUserNAme(userName){
    this.userServ.setUser(userName)
    console.log(`In the loginform comp in the settheloggedInUserName func the user.firstname is: ${userName}`);
    
  }
}
