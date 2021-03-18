import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {About} from './models/about.model';
import {Product} from './models/product.model'
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  
  constructor(private httpClient: HttpClient) {}

  getProductData() {
    return this.httpClient.get('assets/products.json');
  }
  getAboutData() {
    return this.httpClient.get('assets/about.json');
    
    
  }
}
