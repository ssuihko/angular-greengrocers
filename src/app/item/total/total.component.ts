import { Component, Input, OnInit } from '@angular/core';
import { GroceryService } from 'src/app/grocerservice.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css'],
})
export class TotalComponent {
  constructor(public readonly groceryService: GroceryService) {}
}
