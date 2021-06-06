import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductsdataService {
  productlist: Array<Product> = new Array<Product>();
  constructor() {
    let p1 = new Product(1,'abc',2000,'https://images.pexels.com/photos/65894/peacock-pen-alluring-yet-lure-65894.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
    let p2 = new Product(2,'xyz',3000,'https://images.pexels.com/photos/65894/peacock-pen-alluring-yet-lure-65894.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
    let p3 = new Product(3,'abcxyz',4000,'https://images.pexels.com/photos/65894/peacock-pen-alluring-yet-lure-65894.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
    this.productlist.push(p1);
    this.productlist.push(p2);
    this.productlist.push(p3);
   }
  getProductList() {
    return this.productlist;
  }
}