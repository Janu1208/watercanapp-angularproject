import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserve-can',
  templateUrl: './reserve-can.component.html',
  styleUrls: ['./reserve-can.component.css']
})
export class ReserveCanComponent implements OnInit {

  constructor() { }
  mainHeader:boolean=false;
  userHeader:boolean=true;
  ngOnInit() {
  }
}
