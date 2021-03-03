import { TestBed } from '@angular/core/testing';

import { BenchSearchService } from './bench-search.service';

describe('BenchSearchService', () => {
  let service: BenchSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenchSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
