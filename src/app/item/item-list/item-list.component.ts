import { Component } from '@angular/core';
import { GroceryService } from 'src/app/grocerservice.service';
//import { Item } from '../models/item';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
  items: Promise<Item[]> = this.groceryService.items;
  filteredItems: Promise<Item[]> = this.groceryService.items;
  types: string[] = ['vegetable', 'fruit', 'all'];
  index: number = 0;

  constructor(private readonly groceryService: GroceryService) {
    this.items = this.groceryService.items;
    console.log(this.items);
    this.filteredItems = this.groceryService.items;
    console.log(this.items);
  }

  addToCart(item: Item) {
    this.groceryService.addToCart(item);
  }

  filterType(value: object) {
    if (this.types[this.index] == 'all') {
      this.filteredItems = this.items;
    } else {
      this.filteredItems = this.items.then((x) =>
        x.filter((a) => {
          return a.type == this.types[this.index - 1];
        })
      );
    }

    this.index++;
    if (this.index > 2) {
      this.index = 0;
    }
  }

  sortPrice() {
    this.filteredItems = this.items.then((x) =>
      x.sort((a, b) => a.price - b.price)
    );
  }

  sortName() {
    this.filteredItems = this.items.then((x) =>
      x.sort((a, b) => a.name.localeCompare(b.name))
    );
  }
}
