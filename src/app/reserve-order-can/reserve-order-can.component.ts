import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserve-order-can',
  templateUrl: './reserve-order-can.component.html',
  styleUrls: ['./reserve-order-can.component.css']
})
export class ReserveOrderCanComponent implements OnInit {

  constructor() { }
  mainHeader:boolean=false;
  userHeader:boolean=true;
  ngOnInit() {
  }

}
