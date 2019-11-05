import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterserviceService } from '../core/registerservice.service';

type NewType = Router;

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  name:any;
  email:any;
  password:any;
  address:any;
  constructor(private registerService :RegisterserviceService,private router:Router) { }
  ngOnInit(){
  }

register()
{
let formData:any={
  'name':this.name,
  'email':this.email,
  'password':this.password,
  'address':this.address
};
this.registerService.register(formData).subscribe((res)=>{
  console.log(JSON.stringify(res));
  alert('success');
  this.router.navigate(['./userlogin']);
   
},(err)=>{
console.log('error=>'+JSON.stringify(err));
alert(err.error.message);
});
}
}