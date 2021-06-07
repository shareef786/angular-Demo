import { Injectable } from '@angular/core';
import { Product } from './productslist/product';

@Injectable()
export class ProductsdataService {
  cartlist: Array<Product> = [];
  constructor() {
    }
  addProductToCart(product:Product) {
    this.cartlist.push(product);
  }
}