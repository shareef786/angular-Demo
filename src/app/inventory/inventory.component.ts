import { Component, OnInit } from '@angular/core';
import { Product } from '../productslist/product';
import { ProductsdataService } from '../productslist/productsdata.service';

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
  deleteProduct(product:Product) {
    this.productList.pop(product);
  }
  setNewPrice(newprice:number,index:number){
    //Which product price has changed? 
    //Search by product id
    console.error("price....{{newprice}}")
    this.productList[index].price = newprice;
  }
}