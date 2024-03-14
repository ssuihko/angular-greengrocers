import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from './models/item';

@Injectable({
  providedIn: 'root',
})
export class GroceryService {
  cartItems: Item[] = [];
  total: string = '0.00';
  constructor(private readonly http: HttpClient) {}

  get items(): Promise<Item[]> {
    return firstValueFrom(
      this.http.get<Item[]>('https://boolean-api-server.fly.dev/groceries')
    );
  }

  filterType(): Item[] {
    return this.cartItems;
  }

  addToCart(item: Item) {
    if (this.cartItems.filter((e) => e.name === item.name).length > 0) {
      var index = this.cartItems
        .map(function (e) {
          return e.name;
        })
        .indexOf(item.name);
      this.cartItems[index].count++;
      this.total = this.total + item.price;
    } else {
      const itemObj = {
        id: item.id,
        name: item.name,
        price: item.price,
        type: item.type,
        count: 1,
      };

      this.cartItems.push(itemObj);
    }
  }

  totalValue(): string {
    var total = 0;
    this.cartItems.forEach((item) => {
      total = total + item.price * item.count;
    });

    this.total = `${parseFloat(total.toFixed(3))}`;

    if (this.total.length === 3) {
      this.total = this.total + '0';
    }

    if (this.total.length === 1) {
      this.total = this.total + '.00';
    }

    return this.total;
  }

  executePlus(item: Item): Item[] {
    item.count = item.count + 1;

    this.cartItems = this.cartItems.map((x) => {
      if (x.id === item.id) {
        return item;
      } else {
        return x;
      }
    });

    return this.cartItems;
  }

  executeMinus(item: Item): Item[] {
    item.count = item.count - 1;

    this.cartItems = this.cartItems.map((x) => {
      if (x.id === item.id) {
        return item;
      } else {
        return x;
      }
    });

    if (item.count < 1) {
      //console.log(item);
      var index = this.cartItems.indexOf(item);
      //console.log('index? : ', index);
      this.cartItems.splice(index, 1);
    }

    return this.cartItems;
  }
}
