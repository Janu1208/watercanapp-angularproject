import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
 providedIn: 'root'
})
export class ViewStockService {
    apiUrl="https://watercansapp-stock-ms.herokuapp.com/";
 constructor(private http: HttpClient) { }

stockList():any{
 return this.http.get(this.apiUrl+"viewStock");
}
}