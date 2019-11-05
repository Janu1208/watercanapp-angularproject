import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModifyReservedCanService {

  constructor(private http:HttpClient) { }
  apiUrl="https://reservecan.herokuapp.com/";
 
  modifyCan(formData:any):any{
   return this.http.post(this.apiUrl+"modifiedReservedCan",formData);
 }
}