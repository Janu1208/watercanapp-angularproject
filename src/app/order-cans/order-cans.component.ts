import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-cans',
  templateUrl: './order-cans.component.html',
  styleUrls: ['./order-cans.component.css']
})
export class OrderCansComponent implements OnInit {
  [x: string]: any;

  constructor() { }
  mainHeader:boolean=false;
  userHeader:boolean=true;
  ngOnInit() {
  }
  orderCans(){
    alert("Succesfully ordered");
}
}
