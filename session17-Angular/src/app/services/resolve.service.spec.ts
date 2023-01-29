import { TestBed } from '@angular/core/testing';

import { ResolveService } from './resolve.service';

describe('ResolveService', () => {
  let service: ResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
