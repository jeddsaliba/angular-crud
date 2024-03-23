import { TestBed } from '@angular/core/testing';

import { ProjectService } from './project.service';
import { SharedModule } from '@shared/shared.module';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ]
    });
    service = TestBed.inject(ProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
