import { TestBed } from '@angular/core/testing';

import { ALibService } from './a-lib.service';

describe('ALibService', () => {
  let service: ALibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ALibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
