import { TestBed } from '@angular/core/testing';

import { FakecardService } from './fakecard.service';

describe('FakecardService', () => {
  let service: FakecardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakecardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
