import { TestBed } from '@angular/core/testing';

import { ModifyreservedcanService } from './modifyreservedcan.service';

describe('ModifyreservedcanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModifyreservedcanService = TestBed.get(ModifyreservedcanService);
    expect(service).toBeTruthy();
  });
});
