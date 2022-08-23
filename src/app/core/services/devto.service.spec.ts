import { TestBed } from '@angular/core/testing';

import { DevtoService } from './devto.service';

describe('DevtoService', () => {
  let service: DevtoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevtoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
