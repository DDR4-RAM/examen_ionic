import { TestBed } from '@angular/core/testing';

import { AvisoServiceService } from './aviso-service.service';

describe('AvisoServiceService', () => {
  let service: AvisoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvisoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
