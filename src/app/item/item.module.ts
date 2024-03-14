import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { TotalComponent } from './total/total.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ItemListComponent,
    ListItemComponent,
    CartComponent,
    CartItemComponent,
    TotalComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [ItemListComponent, CartComponent, TotalComponent],
})
export class ItemModule {}
