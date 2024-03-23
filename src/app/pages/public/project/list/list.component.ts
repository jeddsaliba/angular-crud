import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Urls } from '@enum/urls';
import { Store } from '@ngrx/store';
import { deleteProjectDelete, getProjectList } from '@shared/redux/project/project.action';
import { ProjectModel } from '@shared/redux/project/project.model';
import { AuthService } from '@shared/services/auth/auth.service';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

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
    this.store.dispatch(getProjectList(this.params));
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
  onCreateUpdate(data?: ProjectModel | null) {
    if (data) {
      const encryptedID = this.authService.encrypt(data.id.toString());
      this.router.navigate([`${Urls.project}`, encryptedID, `${Urls.update}`]);
      return;
    }
    this.router.navigate([`${Urls.project}/${Urls.create}`]);
  }
  onView(data: ProjectModel) {
    const encryptedID = this.authService.encrypt(data.id.toString());
    this.router.navigate([`${Urls.project}`, encryptedID]);
  }
  onDelete(data: ProjectModel) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: 'Confirm',
        message: 'Are you sure you want to delete this project?',
        cancelButton: 'Cancel',
        confirmButton: 'Yes'
      }
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      const encryptedID = this.authService.encrypt(data.id.toString());
      if (result) this.store.dispatch(deleteProjectDelete({
        id: encryptedID
      }));
    });
  }
}

