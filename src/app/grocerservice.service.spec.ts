import { TestBed } from '@angular/core/testing';

import { GroceryService } from './grocerservice.service';

describe('GrocerserviceService', () => {
  let service: GroceryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroceryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
