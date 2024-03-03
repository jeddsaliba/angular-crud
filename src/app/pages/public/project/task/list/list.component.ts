import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth/auth.service';
import { deleteProjectTaskDelete, getProjectTaskList } from 'src/app/shared/store/task/task.action';
import { ProjectTaskModel } from 'src/app/shared/store/task/task.model';
import { CreateUpdateComponent } from '../create-update/create-update.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() id?: string;
  params: any = {
    page: 1,
    limit: 10,
    sort: 'id',
    direction: 'asc'
  };
  constructor(
    private authService: AuthService,
    private store: Store,
    private router: Router,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getList();
  }
  getList() {
    this.store.dispatch(getProjectTaskList({
      id: this.id,
      params: this.params
    }));
  }
  onGoToPage(page: number): void {
    this.params = {...this.params, page};
    this.getList();
  }
  onChangeLimit(limit: number): void {
    this.params = {...this.params, limit};
    this.getList();
  }
  onSort(sort: {sort: string, direction: string} | any): void {
    this.params = {...this.params, ...sort};
    this.getList();
  }
  onSearch(q: string): void {
    this.params = {...this.params, q};
    this.getList();
  }
  onCreateUpdate(data?: ProjectTaskModel | null) {
    data ? this.router.navigate(['project', btoa(data.id.toString()), 'update']) : this.router.navigate(['project/create']);
  }
  onView(data: ProjectTaskModel) {
    const encryptedID = this.authService.encrypt(data.id.toString());
    const encryptedProjectID = this.authService.encrypt(data.project_id.toString());
    this.dialog.open(CreateUpdateComponent, {
      data: {
        title: 'Confirm',
        message: 'Are you sure you want to log out?',
        cancelButton: 'Cancel',
        confirmButton: 'Yes',
        id: encryptedID,
        project_id: encryptedProjectID
      }
    });

    // dialogRef.afterClosed().subscribe((result: boolean) => {
    //   // if (result) this.store.dispatch(logout());
    // });
  }
  onDelete(data: ProjectTaskModel) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: 'Confirm',
        message: 'Are you sure you want to delete this task?',
        cancelButton: 'Cancel',
        confirmButton: 'Yes'
      }
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      const encryptedID = this.authService.encrypt(data.id.toString());
      const encryptedProjectID = this.authService.encrypt(data.project_id.toString());
      if (result) this.store.dispatch(deleteProjectTaskDelete({
        id: encryptedID,
        project_id: encryptedProjectID
      }));
    });
  }
}
