import { Component, OnInit } from '@angular/core';
import { VieworderService } from '../core/vieworder.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})
export class VieworderComponent implements OnInit {
  constructor(private viewOrder:VieworderService,private  router:Router) { }
  data:any;

  ngOnInit() {
    this.viewOrderList();
  }
  viewOrderList()
  {
    
    this.viewOrder.orderList().subscribe( (res) => {
      console.log(JSON.stringify(res));
      this.data=res;
    });
  }
  back() {
    this.router.navigate(['adminhome']);
  }
}
