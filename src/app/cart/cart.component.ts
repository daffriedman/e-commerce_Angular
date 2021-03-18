import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProducts: any;
  bill: any;
  constructor() {}

  ngOnInit(): void {
    this.initiateData();
  }

  initiateData() {
    let data = sessionStorage.getItem('cart');
    if (data !== null) {
      this.cartProducts = JSON.parse(data);
      this.bill = 0;
      for (let i in this.cartProducts) {
        this.cartProducts[i]['qt'] = 1;
        this.bill =
          this.bill + this.cartProducts[i].price * this.cartProducts[i].qt;
      }
    } else {
      this.cartProducts = [];
    }
  }

  updateTotal() {
    this.bill = 0;
    for (let i in this.cartProducts) {
      this.bill =
        this.bill + this.cartProducts[i].price * this.cartProducts[i].qt;
    }
  }
  // removeItem(id) {
  //   this.cartProducts.splice(id, 1);
  //   this.updateTotal();
  //   if (this.cartProducts.length) {
  //     sessionStorage.setItem('cart', JSON.stringify(this.cartProducts));
  //   } else {
  //     sessionStorage.setItem('cart', null);
  //   }
  // }
  removeItem(id) {
    this.cartProducts.splice(id, 1);
    this.updateTotal();

    if (this.cartProducts.length) {
      sessionStorage.setItem('cart', JSON.stringify(this.cartProducts));
    } else {
      // sessionStorage.setItem('cart', null);
      sessionStorage.removeItem('cart')
    }
  }
  payBill() {
    if (this.cartProducts.length) {
      sessionStorage.removeItem('cart');
      this.initiateData();
      alert(`Your bill is $${this.bill} dollars`);
      this.updateTotal();
    } else {
      alert(`No items in cart`);
    }
  }
}
