import { Component } from '@angular/core';
import { AuthserviceService } from './core/authservice.service';
import { AdminauthService } from './core/adminauth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'watercan-frontend';
  
  constructor(private authService: AuthserviceService,private adminAuthService:AdminauthService) { }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }
  isAdminLoggedIn()
  {
    return this.adminAuthService.isAdminLoggedIn();
  }
}
