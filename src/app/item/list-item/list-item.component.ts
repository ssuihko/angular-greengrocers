import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent {
  @Input('item') item: Item | null = null;
  @Output('add') add = new EventEmitter<Item>();

  addToCart() {
    if (!this.item) {
      throw new Error('cannot add null');
    }
    this.add.emit({
      ...this.item,
    });
  }
}
