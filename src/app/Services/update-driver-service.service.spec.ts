import { TestBed } from '@angular/core/testing';

import { UpdateDriverServiceService } from './update-driver-service.service';

describe('UpdateDriverServiceService', () => {
  let service: UpdateDriverServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateDriverServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
