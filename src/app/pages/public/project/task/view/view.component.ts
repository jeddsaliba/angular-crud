import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProjectTaskModel } from '@shared/redux/task/task.model';

export interface DialogData {
  title: string;
  message: string;
  cancelButton: string;
  confirmButton: string;
  task: ProjectTaskModel;
}
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewComponent implements OnInit{
  taskForm: FormGroup | any;
  constructor(
    protected formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
  ngOnInit(): void {
    this.initForm(this.data.task);
  }
  initForm(task?: ProjectTaskModel) {
    this.taskForm = this.formBuilder.group({
      name: new FormControl({
        value: task?.name,
        disabled: true
      }),
      assigned_to_name: new FormControl({
        value: task?.assigned_to_name,
        disabled: true
      }),
      description: new FormControl({
        value: task?.description,
        disabled: true
      }),
      start_date: new FormControl({
        value: task?.start_date,
        disabled: true
      }),
      end_date: new FormControl({
        value: task?.end_date,
        disabled: true
      }),
      status: new FormControl({
        value: task?.status,
        disabled: true
      }),
    });
  }
}
