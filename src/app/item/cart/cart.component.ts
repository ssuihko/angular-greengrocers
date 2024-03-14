import { Component } from '@angular/core';
import { GroceryService } from 'src/app/grocerservice.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartitems: Item[] = this.groceryService.cartItems;

  constructor(private readonly groceryService: GroceryService) {
    this.cartitems = this.groceryService.cartItems;
  }

  executePlus(item: Item) {
    this.cartitems = this.groceryService.executePlus(item);
  }

  executeMinus(item: Item) {
    this.cartitems = this.groceryService.executeMinus(item);
  }
}
