import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../core/loginservice.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  email:any;
  password:any;
  constructor(private loginService :LoginserviceService,private router:Router) { }
  mainHeader:boolean=true;
  userHeader:boolean=false;
  ngOnInit() {
  }
  login()
  {
    let formData:any={   
      'email':this.email,
      'password':this.password  
  };
  this.loginService.login(formData).subscribe((res)=>{
    console.log(JSON.stringify(res));
    alert('login succesfull');
    this.router.navigate(['./userHome']);
     
  },(err)=>{
  console.log('error=>'+err.error.message);
  alert(err.error.message);
  });
  }
}
