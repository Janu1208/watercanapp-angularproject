import { Component, OnInit } from '@angular/core';
import { OrdercanserviceService } from '../core/ordercanservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-cans',
  templateUrl: './order-cans.component.html',
  styleUrls: ['./order-cans.component.css']
})
export class OrderCansComponent implements OnInit {
  orderCans: any;

  constructor(private ordercanService :OrdercanserviceService,private router:Router) { }
  ngOnInit() {
  }
  orderedCans()
 {
   let user = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
   let formData :any= {
  'userId':user.userId,
  'userName':user.name,
  'orderCans':this.orderCans
};
this.ordercanService.orderCan(formData).subscribe((res)=>{
  console.log(JSON.stringify(res));
  alert('ordered success');
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