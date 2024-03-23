import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';
import { SharedModule } from '@shared/shared.module';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ]
    });
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
