import { TestBed } from '@angular/core/testing';

import { RestService } from './rest.service';
import { SharedModule } from '@shared/shared.module';

describe('RestService', () => {
  let service: RestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ]
    });
    service = TestBed.inject(RestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
