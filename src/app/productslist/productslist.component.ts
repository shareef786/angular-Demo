import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {
  productslist:Array<Product> = new Array<Product>();
  constructor() { }

  ngOnInit() {
  }

}