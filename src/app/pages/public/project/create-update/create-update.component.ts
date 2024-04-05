import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogComponent } from '@components/dialog/dialog.component';
import { Store } from '@ngrx/store';
import { getProjectDetails, postProjectCreate, putProjectUpdate } from '@shared/redux/project/project.action';
import { ProjectModel } from '@shared/redux/project/project.model';
import { selectProjectDetails } from '@shared/redux/project/project.selector';
import { isRouteChild, isRouteChildCancel } from '@shared/redux/shared/shared.action';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateUpdateComponent implements OnInit, OnDestroy {
  projectForm: FormGroup | any;
  id?: string;
  details$: Observable<ProjectModel> = of();
  constructor(
    private route: ActivatedRoute,
    private store: Store,
    protected formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.store.dispatch(isRouteChild(true));
    this.initForm();
    this.route.parent?.params.subscribe((params: any) => {
      this.id = params.id;
      if (this.id) {
        this.getProjectDetails();
      }
    });
  }
  ngOnDestroy(): void {
    this.store.dispatch(isRouteChildCancel());
  }
  getProjectDetails() {
    this.store.dispatch(getProjectDetails(this.id));
    this.details$ = this.store.select(selectProjectDetails);
    this.details$.subscribe((project: ProjectModel) => {
      this.projectForm.patchValue({
        name: project?.name,
        description: project?.description
      })
    });
  }
  initForm() {
    this.projectForm = this.formBuilder.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(200),
        ]),
      ],
      description: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(1000),
        ]),
      ]
    });
  }
  onSubmit() {
    if (this.id) {
      const dialogRef = this.dialog.open(DialogComponent, {
        data: {
          title: 'Confirm',
          message: 'Are you sure you want to update this project?',
          cancelButton: 'Cancel',
          confirmButton: 'Yes'
        }
      });
  
      dialogRef.afterClosed().subscribe((result: boolean) => {
        if (result) this.store.dispatch(putProjectUpdate({
          id: this.id,
          data: this.projectForm.value
        }));
      });
      return;
    }
    this.store.dispatch(postProjectCreate({
      data: this.projectForm.value
    }));
  }
}
