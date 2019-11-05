import { TestBed } from '@angular/core/testing';

import { ReservecanService } from './reservecan.service';

describe('ReservecanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReservecanService = TestBed.get(ReservecanService);
    expect(service).toBeTruthy();
  });
});
