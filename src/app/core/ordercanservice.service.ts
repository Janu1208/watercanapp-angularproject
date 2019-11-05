import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdercanserviceService {

  constructor(private http:HttpClient) { }
 apiUrl="https://watercanapp-ordercan.herokuapp.com/";

 orderCan(formData:any):any{
  return this.http.post(this.apiUrl+"orderCan",formData);
}
}
