import { TestBed } from '@angular/core/testing';

import { CanActivateDashboardGuard } from './can-activate-dashboard.guard';

describe('CanActivateDashboardGuard', () => {
  let guard: CanActivateDashboardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateDashboardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
