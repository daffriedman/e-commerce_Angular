import {
  Component,
  OnInit,
  AfterViewChecked,
  ChangeDetectorRef,
} from '@angular/core';

import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { AuthguardService } from '../../authentication/authguard.service';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewChecked {
  products: Product[] = [];
  loggedInUserName;
  constructor(
    public authGServ: AuthguardService,
    private productsServ: ProductsService,
    private changeDetector: ChangeDetectorRef,
    private userServ: UsersService
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.setLoggedInUserName();
  }

  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }

  getProducts() {
    this.productsServ.getProductData().subscribe((productsData: Product[]) => {
      let data = productsData;
      this.products = data;
      console.log(this.products);
    });
  }

  setLoggedInUserName() {
    this.loggedInUserName = this.userServ.loggedInUser;
  }
}
