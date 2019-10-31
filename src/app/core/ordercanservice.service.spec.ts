import { TestBed } from '@angular/core/testing';

import { OrdercanserviceService } from './ordercanservice.service';

describe('OrdercanserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdercanserviceService = TestBed.get(OrdercanserviceService);
    expect(service).toBeTruthy();
  });
});
