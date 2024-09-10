import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductOpeningService {

  private baseUrl='http://localhost:8080/';

  constructor(private http: HttpClient) { 

  }

  saveProductOpening(productopening: object) : Observable<Object> {
    return this.http.post(`${this.baseUrl}saveopening`,productopening);
  }

}
