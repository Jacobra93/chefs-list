import { TestBed, inject } from '@angular/core/testing';

import { NavFooterService } from './nav-footer.service';

describe('NavFooterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavFooterService]
    });
  });

  it('should be created', inject([NavFooterService], (service: NavFooterService) => {
    expect(service).toBeTruthy();
  }));
});
