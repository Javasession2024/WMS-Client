import { TestBed } from '@angular/core/testing';

import { ProductOpeningService } from './product-opening.service';

describe('ProductOpeningService', () => {
  let service: ProductOpeningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductOpeningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
