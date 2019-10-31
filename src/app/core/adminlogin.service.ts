import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
 providedIn: 'root'
})
export class AdminloginService {
 constructor(private http: HttpClient) { }
 apiUrl = "https://watercanapp-user-ms.herokuapp.com/";
 adminlogin(formData: any): any {
   return this.http.post(this.apiUrl + "adminLogin", formData);
 }
}