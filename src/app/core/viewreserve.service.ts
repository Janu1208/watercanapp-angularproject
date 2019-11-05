import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewreserveService {

  apiUrl="https://watercanapp-reserve-ms.herokuapp.com/";
  constructor(private http: HttpClient) { }
 
 reserveList():any{
  return this.http.get(this.apiUrl+"viewReserveOrders");
 }
}