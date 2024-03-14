import { Component } from '@angular/core';
import { GroceryService } from './grocerservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-green-grocers';
  total = this.groceryService.totalValue;

  constructor(
    private readonly groceryService: GroceryService,
    public router: Router
  ) {}
}
