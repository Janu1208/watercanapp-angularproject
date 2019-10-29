import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  constructor(private http:HttpClient) { }
  apiUrl="https://watercanapp-user-ms.herokuapp.com/";

  register(formData:any):any{
    return this.http.post(this.apiUrl+"register",formData);
  }

}
