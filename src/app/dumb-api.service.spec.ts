import { TestBed } from '@angular/core/testing';

import { DumbApiService } from './dumb-api.service';

describe('DumbApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DumbApiService = TestBed.get(DumbApiService);
    expect(service).toBeTruthy();
  });
});
