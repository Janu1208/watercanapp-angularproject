import { TestBed } from '@angular/core/testing';

import { ReserveorderService } from './reserveorder.service';

describe('ReserveorderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReserveorderService = TestBed.get(ReserveorderService);
    expect(service).toBeTruthy();
  });
});
