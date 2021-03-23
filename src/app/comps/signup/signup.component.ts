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

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signInForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public userServ: UsersService,
    private authGServ: AuthguardService
  ) {}

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      this.setTheSignedInUserName(this.signInForm.controls.firstName.value);
      this.userServ.addNewUserToTheDb([
        this.signInForm.controls.firstName.value,
        this.signInForm.controls.lastName.value,
        this.signInForm.controls.email.value,
        this.signInForm.controls.password.value,
      ]);
      this.signInForm.reset();
      this.authGServ.loggedStatus = true;
      this.router.navigateByUrl('/home');
    }
  }

  setTheSignedInUserName(userName) {
    this.userServ.setUser(userName);
    console.log(
      `In the signup comp in the settheInUserName func the user.firstname is: ${userName}`
    );
  }

  checkIUserIsAlreadyInTheSystem(){

  }
}
