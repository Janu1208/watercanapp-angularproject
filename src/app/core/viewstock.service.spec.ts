import { TestBed } from '@angular/core/testing';

import { ViewstockService } from './viewstock.service';

describe('ViewstockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewstockService = TestBed.get(ViewstockService);
    expect(service).toBeTruthy();
  });
});
