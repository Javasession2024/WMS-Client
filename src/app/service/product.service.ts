import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private baseUrl='http://localhost:8080/';

  saveProduct(product: object) : Observable<Object> {
    return this.http.post(`${this.baseUrl}/api/saveProduct`,product);
  }
}
