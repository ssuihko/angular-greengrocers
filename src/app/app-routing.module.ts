import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item/item-list/item-list.component';
import { CartComponent } from './item/cart/cart.component';
import { TotalComponent } from './item/total/total.component';

const routes: Routes = [
  {
    path: 'store',
    component: ItemListComponent,
  },
  {
    path: 'checkout',
    component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
