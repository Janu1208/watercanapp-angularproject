import { Component, OnInit } from '@angular/core';
import { ViewreserveService } from '../core/viewreserve.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewreserve',
  templateUrl: './viewreserve.component.html',
  styleUrls: ['./viewreserve.component.css']
})
export class ViewreserveComponent implements OnInit {
  constructor(private viewReserve:ViewreserveService,private  router:Router) { }
  data:any;

  ngOnInit() {
    this.viewReserveList();
  }
  viewReserveList()
  {
    
    this.viewReserve.reserveList().subscribe( (res) => {
      console.log(JSON.stringify(res));
      this.data=res;
    });
  }
  back() {
    this.router.navigate(['adminhome']);
  }
}
