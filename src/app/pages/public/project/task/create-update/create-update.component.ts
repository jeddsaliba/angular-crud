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
import { ProjectModel } from '@shared/redux/project/project.model';
import { selectProjectDetails } from '@shared/redux/project/project.selector';
import { ProjectInitialState } from '@shared/redux/project/project.state';
import { isRouteChild, isRouteChildCancel } from '@shared/redux/shared/shared.action';
import { getProjectTaskDetails, postProjectTaskCreate, putProjectTaskUpdate } from '@shared/redux/task/task.action';
import { ProjectTaskModel } from '@shared/redux/task/task.model';
import { selectProjectTaskDetails } from '@shared/redux/task/task.selector';
import { getUserList } from '@shared/redux/user/user.action';
import { UserModel } from '@shared/redux/user/user.model';
import { selectUsers } from '@shared/redux/user/user.selector';
import { AuthService } from '@shared/services/auth/auth.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateUpdateComponent implements OnInit, OnDestroy {
  taskForm: FormGroup | any;
  details$: Observable<ProjectModel> = of();
  taskDetails$: Observable<ProjectTaskModel> = of();
  users$: Observable<any> = of([]);
  projectID?: string;
  id?: string;
  userOptions: UserModel[] = [];
  statusOptions: any[] = [
    { label: 'Pending', value: 'Pending'},
    { label: 'Ongoing', value: 'Ongoing'},
    { label: 'Completed', value: 'Completed'}
  ]
  constructor(
    private route: ActivatedRoute,
    private store: Store,
    protected formBuilder: FormBuilder,
    private authService: AuthService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.store.dispatch(isRouteChild(true));
    this.initForm();
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
    });
    this.getProjectDetails();
    this.getUsers();
  }
  ngOnDestroy(): void {
    this.store.dispatch(isRouteChildCancel());
  }
  getProjectDetails() {
    this.details$ = this.store.select(selectProjectDetails);
    this.details$.subscribe((project: ProjectModel) => {
      if (project !== ProjectInitialState) {
        this.projectID = this.authService.encrypt(project.id.toString());
        if (this.id) {
          this.getDetails();
        }
      }
    });
  }
  getUsers() {
    this.store.dispatch(getUserList());
    this.users$ = this.store.select(selectUsers);
    this.users$.subscribe(({data}) => {
      this.userOptions = data.map((val: UserModel) => {
        return {
          value: val.id,
          label: val.name
        }
      });
    })
  }
  getDetails() {
    this.store.dispatch(
      getProjectTaskDetails({ project_id: this.projectID, id: this.id })
    );
    this.taskDetails$ = this.store.select(selectProjectTaskDetails);
    this.taskDetails$.subscribe((task: ProjectTaskModel) => {
      this.taskForm.patchValue({
        name: task?.name,
        assigned_to: task?.assigned_to,
        description: task?.description,
        start_date: task?.start_date,
        end_date: task?.end_date,
        status: task?.status
      });
    });
  }
  initForm() {
    this.taskForm = this.formBuilder.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(200),
        ]),
      ],
      assigned_to: [
        '',
        Validators.compose([
          Validators.required
        ]),
      ],
      description: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(1000),
        ]),
      ],
      start_date: [
        '',
        Validators.compose([
          Validators.required
        ])
      ],
      end_date: [
        '',
        Validators.compose([
          Validators.required
        ])
      ],
      status: [
        '',
        Validators.compose([
          Validators.required
        ])
      ]
    });
  }
  onSubmit() {
    if (this.id) {
      const dialogRef = this.dialog.open(DialogComponent, {
        data: {
          title: 'Confirm',
          message: 'Are you sure you want to update this task?',
          cancelButton: 'Cancel',
          confirmButton: 'Yes'
        }
      });
  
      dialogRef.afterClosed().subscribe((result: boolean) => {
        if (result) this.store.dispatch(putProjectTaskUpdate({
          project_id: this.projectID,
          id: this.id,
          data: this.taskForm.value
        }));
      });
      return;
    }
    this.store.dispatch(postProjectTaskCreate({
      project_id: this.projectID,
      data: this.taskForm.value
    }));
  }
}
