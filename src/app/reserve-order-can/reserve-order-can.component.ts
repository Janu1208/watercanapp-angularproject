import { Component, OnInit } from '@angular/core';
import { ReservecanService } from '../core/reservecan.service';
import { Router } from '@angular/router';
import { ReserveorderService } from '../core/reserveorder.service';

@Component({
  selector: 'app-reserve-order-can',
  templateUrl: './reserve-order-can.component.html',
  styleUrls: ['./reserve-order-can.component.css']
})
export class ReserveOrderCanComponent implements OnInit {
  reserveId: any;

  constructor(private reservecanService :ReserveorderService,private router:Router) { }
  ngOnInit() {
  }
  reserveCans()
 {
   let user = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
   let formData :any= {
  'userId':user.userId,
  'userName':user.name,
  'reserveId':this.reserveId
};
this.reservecanService.reserveCan(formData).subscribe((res)=>{
  console.log(JSON.stringify(res));
  alert('Reserved cans ordered succesfully');
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
