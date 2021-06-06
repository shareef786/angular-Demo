import { Component, OnInit } from '@angular/core';
import { ProductsdataService } from '../productslist/productsdata.service';
import { Product } from './product';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  productList: Array<Product> = [];
  constructor(dataservice: ProductsdataService) {
    this.productList = dataservice.getProductList();
   }

  ngOnInit() {
  }

}