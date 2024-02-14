import { TestBed } from '@angular/core/testing';

import { SearchReccomendationsService } from './search-reccomendations.service';

describe('SearchReccomendationsService', () => {
  let service: SearchReccomendationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchReccomendationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
