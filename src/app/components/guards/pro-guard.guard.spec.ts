import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { proGuardGuard } from './pro-guard.guard';

describe('proGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => proGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
