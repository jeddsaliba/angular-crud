import {
  Component,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ProjectModel } from 'src/app/shared/store/project/project.model';
import { selectProjectDetails } from 'src/app/shared/store/project/project.selector';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { getProjectDetails, postProjectCreate, putProjectUpdate } from 'src/app/shared/store/project/project.action';


@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.scss']
})
export class CreateUpdateComponent implements OnInit {
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
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
      if (this.id) {
        this.getProjectDetails();
      } else {
        this.initForm();
      }
    });
  }
  getProjectDetails() {
    this.store.dispatch(getProjectDetails(this.id));
    this.details$ = this.store.select(selectProjectDetails);
    this.details$.subscribe((project: ProjectModel) => {
      this.initForm(project);
    });
  }
  initForm(project?: ProjectModel) {
    this.projectForm = this.formBuilder.group({
      name: [
        project?.name,
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(200),
        ]),
      ],
      description: [
        project?.description,
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
