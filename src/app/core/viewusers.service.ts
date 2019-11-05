import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewusersService {

  apiUrl="https://watercanapp-user-ms.herokuapp.com/";
  constructor(private http: HttpClient) { }
 
 viewUsers():any{
  return this.http.get(this.apiUrl+"viewUsers");
 }
}
