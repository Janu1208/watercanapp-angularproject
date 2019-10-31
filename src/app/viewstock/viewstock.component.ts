import { Component, OnInit } from '@angular/core';
import { ViewStockService } from '../core/viewstock.service';

@Component({
  selector: 'app-viewstock',
  templateUrl: './viewstock.component.html',
  styleUrls: ['./viewstock.component.css']
 })
 export class ViewstockComponent implements OnInit {
  constructor(private viewstockservice:ViewStockService) { }
  ngOnInit() {
    this.viewstock();
  }
  viewstock()
  {
      this.viewstockservice.stockList().subscribe( (res) => {
        console.log(JSON.stringify(res));
      });
  }
 }
