import { TestBed } from '@angular/core/testing';

import { AnanthaService } from './anantha.service';

describe('AnanthaService', () => {
  let service: AnanthaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnanthaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
