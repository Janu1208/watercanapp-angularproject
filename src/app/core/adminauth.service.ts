import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }
  
  getAdmin(){
    let admin = JSON.parse(localStorage.getItem("LOGGED_IN_ADMIN"));
    return admin;
  }
  isAdminLoggedIn(){
    let admin = this.getAdmin();
    return admin != null;
  }
}
