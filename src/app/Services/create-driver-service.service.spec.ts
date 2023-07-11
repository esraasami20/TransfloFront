import { TestBed } from '@angular/core/testing';

import { CreateDriverServiceService } from './create-driver-service.service';

describe('CreateDriverServiceService', () => {
  let service: CreateDriverServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateDriverServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
