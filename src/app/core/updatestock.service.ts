import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdatestockService {
  apiUrl="https://watercansapp-stock-ms.herokuapp.com/";

  constructor(private http: HttpClient) { }

  stockUpdate(formData:any):any{
    return this.http.post(this.apiUrl+"update",formData);
  }
}
