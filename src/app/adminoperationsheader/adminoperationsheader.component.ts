import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../core/authservice.service';
import { Router } from '@angular/router';
import { AdminauthService } from '../core/adminauth.service';

@Component({
  selector: 'app-adminoperationsheader',
  templateUrl: './adminoperationsheader.component.html',
  styleUrls: ['./adminoperationsheader.component.css']
})
export class AdminoperationsheaderComponent implements OnInit {
  constructor(private adminAuthService: AdminauthService,private router:Router) { }

  ngOnInit() {
  }
  getAdmin(){
    return this.getAdmin();
  }

  isAdminLoggedIn(){
    return this.adminAuthService.isAdminLoggedIn();
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['adminlogin']);
  }
}

