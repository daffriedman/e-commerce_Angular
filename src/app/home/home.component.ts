import {
  Component,
  OnInit,
  AfterViewChecked,
  ChangeDetectorRef,
} from '@angular/core';

import { Product } from '../models/product.model';
import { ProductsService } from '../products.service';
import { AuthguardService } from '../authguard.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewChecked {
  products: Product[] = [];
  constructor(public authGServ: AuthguardService,
    private productsServ: ProductsService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getProducts();
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
}
