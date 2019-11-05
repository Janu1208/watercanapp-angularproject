import { TestBed } from '@angular/core/testing';

import { UpdatestockService } from './updatestock.service';

describe('UpdatestockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdatestockService = TestBed.get(UpdatestockService);
    expect(service).toBeTruthy();
  });
});
