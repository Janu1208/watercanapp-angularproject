import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminloginService } from '../core/adminlogin.service';
@Component({
 selector: 'app-admin-login',
 templateUrl: './admin-login.component.html',
 styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
email:any;
password:any;
 constructor(private adminSevice:AdminloginService,private router:Router) { }
 mainHeader:boolean=true;
 userHeader:boolean=false;
 ngOnInit() {
 }
 adminLogin()
{
let formData:any={
   'email':this.email,
 'password':this.password,
 };
this.adminSevice.adminlogin(formData).subscribe((res)=>{
 console.log(JSON.stringify(res));
 alert('Login success');
 this.router.navigate(['./adminhome']);
},(err)=>{
console.log('error=>'+JSON.stringify(err));
alert(err.error.message);
});
}
}