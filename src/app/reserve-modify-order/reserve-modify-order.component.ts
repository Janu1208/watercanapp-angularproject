import { Component, OnInit } from '@angular/core';
import { ModifyReservedCanService } from '../core/modifyreservedcan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserve-modify-order',
  templateUrl: './reserve-modify-order.component.html',
  styleUrls: ['./reserve-modify-order.component.css']
})
export class ReserveModifyOrderComponent implements OnInit {
  reservedOrderCans: any;
  reserveId: any;

  constructor(private modifyService :ModifyReservedCanService,private router:Router) { }
  ngOnInit() {
  }
  modifyCans()
 {
   let user = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
   let formData :any= {
  'userId':user.userId,
  'userName':user.name,
  'reservedOrderCans':this.reservedOrderCans,
  'reserveId':this.reserveId
};
this.modifyService.modifyCan(formData).subscribe((res)=>{
  console.log(JSON.stringify(res));
    alert("order success");
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
