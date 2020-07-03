import { TestBed } from '@angular/core/testing';

import { HolidayBookingServiceService } from './holiday-booking-service.service';

describe('HolidayBookingServiceService', () => {
  let service: HolidayBookingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolidayBookingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
