import { TestBed } from '@angular/core/testing';

import { AdminviewstockService } from './adminviewstock.service';

describe('AdminviewstockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminviewstockService = TestBed.get(AdminviewstockService);
    expect(service).toBeTruthy();
  });
});
