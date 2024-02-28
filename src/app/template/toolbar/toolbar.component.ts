import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { logout } from 'src/app/shared/store/user/user.action';
import { UserModel } from 'src/app/shared/store/user/user.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  user: UserModel | undefined;
  appName: string = environment.appName;
  constructor(public dialog: MatDialog, private router: Router, private store: Store) {}
  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user') || '{}');
  }
  onHandleLogout(): void {
    this.onHandleConfirm();
  }
  onHandleGoToProfile(): void {
    this.router.navigate(['/user/profile']);
  }
  onHandleConfirm() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: 'Confirm',
        message: 'Are you sure you want to log out?',
        cancelButton: 'Cancel',
        confirmButton: 'Yes'
      }
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) this.store.dispatch(logout());
    });
  }
}
