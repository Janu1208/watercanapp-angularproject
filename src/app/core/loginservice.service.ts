import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {


  constructor(private http:HttpClient) { }
  apiUrl= "https://watercanapp-user-ms.herokuapp.com/";

  login(formData:any):any{
    return this.http.post(this.apiUrl+"userLogin",formData);
  }
}
