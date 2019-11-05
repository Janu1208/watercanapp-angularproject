import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../core/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthserviceService,private router:Router) { }

  ngOnInit() {
  }

  getUser(){
    return this.getUser();
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }
 
}
