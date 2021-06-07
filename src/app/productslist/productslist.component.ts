import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductsdataService } from './productsdata.service';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {
  productlist: Array<Product> = [];
  isLoggedIn: boolean = true;
  constructor(dataservice: ProductsdataService) {
    this.productlist = dataservice.getProductList();
   }
  ngOnInit() {
  }
  addToCart(product:Product, dataservice: ProductsdataService) {
    dataservice.addProductToCart(product);
  }

}