import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReserveorderService {

  constructor(private http:HttpClient) { }
  apiUrl="https://reservecan.herokuapp.com/";
 
  reserveCan(formData:any):any{
   return this.http.post(this.apiUrl+"reserveOrderCan",formData);
 }
}
