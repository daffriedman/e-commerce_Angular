import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import {About} from '../models/about.model';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( private productsServ: ProductsService) { }
about:About[] = [];
  ngOnInit(): void {
    this.getAboutData();
  }

  getAboutData() {
this.productsServ.getAboutData()
.subscribe((aboutData:About) => {
  let data = aboutData;
  this.about.push(data);
  console.log(this.about);
   
})


  }
}
