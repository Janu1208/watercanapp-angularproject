import { Component, OnInit } from '@angular/core';
import { ReservecanService } from '../core/reservecan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserve-can',
  templateUrl: './reserve-can.component.html',
  styleUrls: ['./reserve-can.component.css']
})
export class ReserveCanComponent implements OnInit {
  reservedCans: any;
  reserveId: any;
  constructor(private reservecanService :ReservecanService,private router:Router) { }
  ngOnInit() {
  }
  reserveCans()
 {
   let user = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
   let formData :any= {
  'userId':user.userId,
  'userName':user.name,
  'reservedCans':this.reservedCans
};
this.reservecanService.reserveCan(formData).subscribe((res)=>{
  console.log(JSON.stringify(res));
  let id=res.reserveId;
  alert("Success,Your reserve Id  is "+id);
  this.router.navigate(['./userHome']);
   
},(err)=>{
console.log('error=>'+JSON.stringify(err));
alert(err.error.message);
});
}
back()
{
  this.router.navigate(['./userHome']);

}
}

