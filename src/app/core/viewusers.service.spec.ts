import { TestBed } from '@angular/core/testing';

import { ViewusersService } from './viewusers.service';

describe('ViewusersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewusersService = TestBed.get(ViewusersService);
    expect(service).toBeTruthy();
  });
});
