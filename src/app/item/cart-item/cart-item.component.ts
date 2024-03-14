import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input('item') item: Item | null = null;
  @Output('plus') plus = new EventEmitter<Item>();
  @Output('minus') minus = new EventEmitter<Item>();

  executePlus() {
    if (!this.item) {
      throw new Error('cannot add null');
    }
    this.plus.emit({
      ...this.item,
    });
  }

  executeMinus() {
    if (!this.item) {
      throw new Error('cannot add null');
    }
    this.minus.emit({
      ...this.item,
    });
  }
}
