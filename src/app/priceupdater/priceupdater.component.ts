import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-priceupdater',
  templateUrl: './priceupdater.component.html',
  styleUrls: ['./priceupdater.component.css']
})
export class PriceupdaterComponent implements OnInit {
  @Input() //directive
  price: number; // input value will be set by Parent

  @Output()
  update = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  updatePrice(){
    // Trigger my custom event to emit price
    this.update.emit(this.price);
  }
}