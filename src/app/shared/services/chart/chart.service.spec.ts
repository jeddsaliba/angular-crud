import { TestBed } from '@angular/core/testing';

import { ChartService } from './chart.service';
import { SharedModule } from '@shared/shared.module';

describe('ChartService', () => {
  let service: ChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ]
    });
    service = TestBed.inject(ChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
