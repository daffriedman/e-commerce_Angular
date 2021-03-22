import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { About } from '../../app/models/about.model';
import { Product } from '../../app/models/product.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  cartArray: Product[] = [];

  constructor(private httpClient: HttpClient) {}

  getProductData(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('assets/products.json');
  }
  getAboutData(): Observable<About> {
    return this.httpClient.get<About>('assets/about.json');
  }

  addToCart(item) {
    this.cartArray.push(item);
    console.log(
      `in the AddToCart func in the products service  ${this.cartArray}`
    );
  }
  // getFromCartArray() {
  //   return this.cartArray;
  // }
}
