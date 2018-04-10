import { TestBed, inject } from '@angular/core/testing';

import { XfinityServiceService } from './xfinity-service.service';

describe('XfinityServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XfinityServiceService]
    });
  });

  it('should be created', inject([XfinityServiceService], (service: XfinityServiceService) => {
    expect(service).toBeTruthy();
  }));
});
