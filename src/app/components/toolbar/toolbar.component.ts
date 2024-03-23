import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { AuthModel } from '@shared/redux/auth/auth.model';
import { logout } from '@shared/redux/auth/auth.action';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  loggedInUser: AuthModel | undefined;
  appName: string = environment.appName;
  constructor(public dialog: MatDialog, private store: Store) {}
  ngOnInit(): void {
    this.loggedInUser = JSON.parse(sessionStorage.getItem('user') || '{}');
  }
  onLogout(): void {
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
