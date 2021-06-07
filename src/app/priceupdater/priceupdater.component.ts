import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-priceupdater',
  templateUrl: './priceupdater.component.html',
  styleUrls: ['./priceupdater.component.css']
})
export class PriceupdaterComponent implements OnInit {
  @Input() //directive
  price: number; // input value will be set by Parent
  constructor() { }

  ngOnInit() {
  }

}