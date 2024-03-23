import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectComponent],
      imports: [
        BrowserAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
