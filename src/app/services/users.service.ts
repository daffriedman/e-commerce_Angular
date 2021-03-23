import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  loggedInUser = '';
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get<User[]>('assets/users.json');
  }
  setUser(userName) {
    this.loggedInUser = userName;
    console.log(
      `In the userService this is the name of the user${this.loggedInUser} `
    );
  }
  addNewUserToTheDb(newUser){
    console.log(`In the users service in the addNewUserToTheDb func ${newUser}`);
    
  }
}
