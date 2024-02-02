import { TestBed } from '@angular/core/testing';

import { SvdParserService } from './svd-parser.service';

describe('SvdParserService', () => {
  let service: SvdParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvdParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
