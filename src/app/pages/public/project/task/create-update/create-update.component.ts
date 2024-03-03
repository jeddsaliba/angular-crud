import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { getProjectTaskDetails } from 'src/app/shared/store/task/task.action';

export interface DialogData {
  id: string;
  project_id: string;
  title: string;
  message: string;
  cancelButton: string;
  confirmButton: string;
}

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.scss']
})
export class CreateUpdateComponent implements OnInit {
  constructor(
    private store: Store,
    public dialogRef: MatDialogRef<CreateUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
  ngOnInit(): void {
    this.getDetails();
  }
  getDetails() {
    this.store.dispatch(getProjectTaskDetails({project_id: this.data.project_id, id: this.data.id}));
  }
}