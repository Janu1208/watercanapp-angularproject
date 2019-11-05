import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VieworderService {

  apiUrl="https://watercanapp-ordercan.herokuapp.com/";
  constructor(private http: HttpClient) { }
 
 orderList():any{
  return this.http.get(this.apiUrl+"viewOrders");
 }
}
