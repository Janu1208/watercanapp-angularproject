import { Component, OnInit } from '@angular/core';
import { ViewStockService } from '../core/viewstock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewstock',
  templateUrl: './viewstock.component.html',
  styleUrls: ['./viewstock.component.css']
 })
 export class ViewstockComponent implements OnInit {
  constructor(private user:ViewStockService,private router:Router) { }
  data:any;
  ngOnInit() {
    this.viewstock();
  }
  viewstock()
  {
      this.user.stockList().subscribe( (res) => {
        console.log(JSON.stringify(res));
        this.data=res;
      });
  }
  back() {
    this.router.navigate(['userHome']);
  }
 }
