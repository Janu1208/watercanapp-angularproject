import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../core/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-operations-header',
  templateUrl: './user-operations-header.component.html',
  styleUrls: ['./user-operations-header.component.css']
})
export class UserOperationsHeaderComponent implements OnInit {

  constructor(private authService: AuthserviceService,private router:Router) { }

  ngOnInit() {
  }

  getUser(){
    return this.getUser();
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['userlogin']);
  }
}
