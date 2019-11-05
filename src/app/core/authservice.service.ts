import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  constructor() { }
  getUser(){
    let user = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
    return user;
  } 
  isLoggedIn(){
    let user = this.getUser();
    return user != null;
  }

}
