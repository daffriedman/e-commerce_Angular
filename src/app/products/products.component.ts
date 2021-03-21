import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Product} from '../models/product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  
  products: Product[];
  cartProducts: any;
  constructor(private router: Router, private productsServ: ProductsService) {

    
  }

  ngOnInit(): void {
     this.getProducts();
    let data = sessionStorage.getItem('cart');
    if (data !== null) {
      this.cartProducts = JSON.parse(data);
    } else {
      this.cartProducts = [];
    }
  }

  getProducts() {
    this.productsServ.getProductData().subscribe((productsData: Product[]) => {
      let data = productsData;
      this.products =data 
      console.log(`In the Product getProducts func ${this.products}`);
      
    });
  }
  addToCart(index) {
    let product = this.products[index];
    let cartData = [];
    let data = sessionStorage.getItem('cart');
   

    if (data !== null) {
      cartData = JSON.parse(data);
    }
    cartData.push(product);
    this.upDataCartData(cartData);
    sessionStorage.setItem('cart', JSON.stringify(cartData));
  
  }

  upDataCartData(cartData) {
    this.cartProducts = cartData;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}
