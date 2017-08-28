import { TestBed, inject } from '@angular/core/testing';

import { OneBusApiService } from './one-bus-api.service';

describe('OneBusApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OneBusApiService]
    });
  });

  it('should ...', inject([OneBusApiService], (service: OneBusApiService) => {
    expect(service).toBeTruthy();
  }));
});
