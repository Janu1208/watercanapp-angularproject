import { TestBed } from '@angular/core/testing';

import { ViewreserveService } from './viewreserve.service';

describe('ViewreserveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewreserveService = TestBed.get(ViewreserveService);
    expect(service).toBeTruthy();
  });
});
