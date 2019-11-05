import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminViewStockService } from '../core/adminviewstock.service';

@Component({
  selector: 'app-adminviewstock',
  templateUrl: './adminviewstock.component.html',
  styleUrls: ['./adminviewstock.component.css']
 })
 export class AdminviewstockComponent implements OnInit {
  constructor(private admin:AdminViewStockService,private router:Router) { }
  data:any;
  ngOnInit() {
    this.viewstock();
  }
  viewstock()
  {
      this.admin.stockList().subscribe( (res) => {
        console.log(JSON.stringify(res));
        this.data=res;
      });
  }
  back() {
    this.router.navigate(['adminhome']);
  }
 }

