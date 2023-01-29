import { TestBed } from '@angular/core/testing';

import { CanActivateChildGuard } from './can-activate-child.guard';

describe('CanActivateChildGuard', () => {
  let guard: CanActivateChildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateChildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
